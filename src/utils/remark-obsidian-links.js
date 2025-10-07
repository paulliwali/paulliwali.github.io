import { visit } from 'unist-util-visit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Build a cache of all note files and their titles
let noteCache = null;

function buildNoteCache() {
  if (noteCache) return noteCache;

  noteCache = new Map();

  // Scan all content directories
  const contentDirs = [
    path.join(__dirname, '../../docs/slip-box'),
    path.join(__dirname, '../../docs/daily-notes'),
    path.join(__dirname, '../../docs/digital-garden'),
  ];

  function scanDirectory(dir, baseDir, prefix = '') {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach(file => {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        const newPrefix = prefix ? `${prefix}/${file.name}` : file.name;
        scanDirectory(fullPath, baseDir, newPrefix);
      } else if (file.name.endsWith('.md')) {
        const fileName = file.name.replace('.md', '');
        const relativePath = prefix ? `${prefix}/${fileName}` : fileName;

        // Map both the filename and the full title
        noteCache.set(fileName.toLowerCase(), relativePath);

        // Also map common date formats for daily notes
        // e.g., "October 2nd, 2020" -> "2020/2020-10-02"
        const dateMatch = fileName.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (dateMatch) {
          const [_, year, month, day] = dateMatch;
          const date = new Date(year, parseInt(month) - 1, parseInt(day));

          // Format with ordinal suffix (1st, 2nd, 3rd, etc.)
          const dayNum = parseInt(day);
          const suffixes = ['th', 'st', 'nd', 'rd'];
          const v = dayNum % 100;
          const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];

          const monthName = date.toLocaleDateString('en-US', { month: 'long' });
          const formatted = `${monthName} ${dayNum}${suffix}, ${year}`;

          noteCache.set(formatted.toLowerCase(), relativePath);
        }
      }
    });
  }

  contentDirs.forEach(dir => {
    const dirName = path.basename(dir);
    scanDirectory(dir, dir, '');
  });

  return noteCache;
}

export default function remarkObsidianLinks() {
  return (tree) => {
    const cache = buildNoteCache();

    visit(tree, 'text', (node, index, parent) => {
      const text = node.value;
      const wikiLinkRegex = /\[\[([^\]|]+)(\|([^\]]+))?\]\]/g;

      let match;
      let lastIndex = 0;
      const newNodes = [];

      while ((match = wikiLinkRegex.exec(text)) !== null) {
        const [fullMatch, linkText, _, displayText] = match;
        const beforeText = text.slice(lastIndex, match.index);

        if (beforeText) {
          newNodes.push({ type: 'text', value: beforeText });
        }

        // Resolve the link
        let slug = cache.get(linkText.toLowerCase());

        if (!slug) {
          // Fallback: convert to slug format
          slug = linkText.replace(/ /g, '-').toLowerCase();
        }

        // Determine the URL based on which collection it belongs to
        let url;
        if (slug.startsWith('daily-notes/') || slug.match(/^\d{4}\//)) {
          url = `/garden/${slug}`;
        } else if (slug.includes('/')) {
          url = `/notes/${slug}`;
        } else {
          // Try to find it in the cache with a directory prefix
          let found = false;
          for (const [key, value] of cache.entries()) {
            if (value.endsWith('/' + slug) || value === slug) {
              if (value.match(/^\d{4}\//)) {
                url = `/garden/${value}`;
              } else {
                url = `/notes/${value}`;
              }
              found = true;
              break;
            }
          }
          if (!found) {
            url = `/notes/${slug}`;
          }
        }

        newNodes.push({
          type: 'link',
          url,
          children: [{ type: 'text', value: displayText || linkText }],
        });

        lastIndex = match.index + fullMatch.length;
      }

      const afterText = text.slice(lastIndex);
      if (afterText) {
        newNodes.push({ type: 'text', value: afterText });
      }

      if (newNodes.length > 0) {
        parent.children.splice(index, 1, ...newNodes);
        return index + newNodes.length;
      }
    });
  };
}
