import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Build a cache of all notes
let cache = null;

function buildCache() {
  if (cache) return cache;

  cache = new Map();

  const dirs = [
    { base: path.join(__dirname, '../../docs/slip-box'), prefix: '' },
    { base: path.join(__dirname, '../../docs/daily-notes'), prefix: 'daily-notes' },
    { base: path.join(__dirname, '../../docs/digital-garden'), prefix: 'digital-garden' },
  ];

  function scan(dir, prefix) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        const newPrefix = prefix ? `${prefix}/${file.name}` : file.name;
        scan(fullPath, newPrefix);
      } else if (file.name.endsWith('.md')) {
        const fileName = file.name.replace('.md', '');
        const slug = prefix ? `${prefix}/${fileName}` : fileName;

        // Store filename -> slug mapping
        cache.set(fileName.toLowerCase(), slug);

        // For date files, also map formatted dates
        const dateMatch = fileName.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (dateMatch) {
          const [_, year, month, day] = dateMatch;
          const date = new Date(year, parseInt(month) - 1, parseInt(day));
          const dayNum = parseInt(day);

          // Ordinal suffix
          const suffixes = ['th', 'st', 'nd', 'rd'];
          const v = dayNum % 100;
          const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];

          const monthName = date.toLocaleDateString('en-US', { month: 'long' });
          const formatted = `${monthName} ${dayNum}${suffix}, ${year}`;

          cache.set(formatted.toLowerCase(), slug);
        }
      }
    }
  }

  dirs.forEach(({ base, prefix }) => scan(base, prefix));

  return cache;
}

export function pageResolver(name) {
  const c = buildCache();
  const slug = c.get(name.toLowerCase());

  if (slug) {
    return [slug];
  }

  // Fallback
  return [name.replace(/ /g, '-').toLowerCase()];
}

export function hrefTemplate(permalink) {
  // Check if it's a daily note (in garden)
  if (permalink.startsWith('daily-notes/') || permalink.match(/^\d{4}\//)) {
    return `/garden/${permalink}`;
  }

  // Otherwise it's in slip-box
  return `/slip-box/${permalink}`;
}
