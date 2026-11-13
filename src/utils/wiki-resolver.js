import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { slug as githubSlug } from 'github-slugger';
import { parseFrontmatter } from '../../scripts/privacy-rules.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');

function computeAstroSlug(relPathWithoutExt, frontmatterSlug) {
  if (frontmatterSlug) return String(frontmatterSlug).trim();
  return relPathWithoutExt
    .split('/')
    .map((seg) => githubSlug(seg))
    .join('/')
    .replace(/\/index$/, '');
}

function buildCache() {
  const cache = new Map();

  const register = (keys, routeUrl) => {
    for (const k of keys) {
      if (k) cache.set(String(k).toLowerCase().trim(), routeUrl);
    }
  };

  function scanDir(baseDir, routeBuilder, relPrefix = '') {
    if (!fs.existsSync(baseDir)) return;
    const entries = fs.readdirSync(baseDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(baseDir, entry.name);
      const relPath = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        scanDir(fullPath, routeBuilder, relPath);
      } else if (entry.name.endsWith('.md')) {
        const raw = fs.readFileSync(fullPath, 'utf8');
        const { data, body } = parseFrontmatter(raw);
        const relNoExt = relPath.replace(/\.md$/, '');
        const fileName = entry.name.replace(/\.md$/, '');
        const headingMatch = body.match(/^#\s+(.+)$/m);
        const title = data.title || (headingMatch ? headingMatch[1].trim() : fileName);

        const routeUrl = routeBuilder({ relNoExt, fileName, data });
        const keys = [
          relNoExt,
          fileName !== 'index' ? fileName : relPath.split('/')[0],
          title,
          data.slug,
        ];

        // Also support formatted date aliases for daily notes (e.g. "July 10th, 2026")
        const dateMatch = fileName.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (dateMatch) {
          const [, year, month, day] = dateMatch;
          const date = new Date(Number(year), Number(month) - 1, Number(day));
          const dayNum = Number(day);
          const suffixes = ['th', 'st', 'nd', 'rd'];
          const v = dayNum % 100;
          const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
          const monthName = date.toLocaleDateString('en-US', { month: 'long' });
          keys.push(`${monthName} ${dayNum}${suffix}, ${year}`);
        }

        register(keys, routeUrl);
      }
    }
  }

  // 1. Curated Slip-Box notes -> `/slip-box/<slug>`
  scanDir(path.join(rootDir, 'garden/slip-box'), ({ relNoExt, data }) => {
    return `/slip-box/${computeAstroSlug(relNoExt, data.slug)}`;
  });

  // 2. Curated Daily notes -> `/garden/<slug>`
  scanDir(path.join(rootDir, 'garden/daily-notes'), ({ relNoExt, data }) => {
    return `/garden/${computeAstroSlug(relNoExt, data.slug)}`;
  });

  // 3. Garden blog posts -> `/garden/<slug>`
  scanDir(path.join(rootDir, 'blog'), ({ relNoExt, data }) => {
    const astroId = computeAstroSlug(relNoExt, data.slug);
    const slug = data.slug || astroId.split('/')[0];
    return `/garden/${slug}`;
  });

  return cache;
}

export function pageResolver(name) {
  const c = buildCache();
  const routeUrl = c.get(name.toLowerCase().trim());

  if (routeUrl) {
    // Strip leading `/` since hrefTemplate adds `/`
    return [routeUrl.replace(/^\//, '')];
  }

  return [`slip-box/${githubSlug(name.trim())}`];
}

export function hrefTemplate(permalink) {
  if (permalink.startsWith('/')) return permalink;
  return `/${permalink}`;
}
