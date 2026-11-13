import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { slug as githubSlug } from 'github-slugger';
import { parseFrontmatter } from './privacy-rules.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

/**
 * Compute Astro-compatible slug so every node's `url` matches `window.location.pathname`.
 */
function computeAstroSlug(relPathWithoutExt, frontmatterSlug) {
  if (frontmatterSlug) return String(frontmatterSlug).trim();
  return relPathWithoutExt
    .split('/')
    .map((seg) => githubSlug(seg))
    .join('/')
    .replace(/\/index$/, '');
}

function extractTitle(body, frontmatter, fallbackName) {
  if (frontmatter.title) return String(frontmatter.title).trim();
  const headingMatch = body.match(/^#\s+(.+)$/m);
  if (headingMatch) return headingMatch[1].trim();
  return fallbackName.replace(/\.md$/, '').replace(/-/g, ' ');
}

function extractWikilinks(body) {
  const wikilinkRegex = /(?<!!)\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g;
  const results = [];
  let match;
  while ((match = wikilinkRegex.exec(body)) !== null) {
    results.push(match[1].trim());
  }
  return results;
}

function extractInternalMarkdownLinks(body) {
  const mdLinkRegex = /\]\((\/(?:garden|slip-box)\/[^)#?\s]+)\)/g;
  const results = [];
  let match;
  while ((match = mdLinkRegex.exec(body)) !== null) {
    results.push(match[1].replace(/\/$/, '').trim());
  }
  return results;
}

function inferSlipBoxCategory(relPath) {
  if (relPath.startsWith('reference-notes/')) return 'reference-notes';
  if (relPath.startsWith('literature-notes/')) return 'literature-notes';
  if (relPath.startsWith('permanent-notes/')) return 'permanent-notes';
  if (relPath.startsWith('writing-bin/')) return 'writing-bin';
  return 'unorganized';
}

function normalizeKey(str) {
  return String(str).toLowerCase().trim();
}

// Store all nodes (keyed by canonical route URL)
const nodesByUrl = new Map();
const lookupMap = new Map(); // normalized alias -> canonical route URL

function registerNode(node, aliases) {
  if (nodesByUrl.has(node.url)) return;
  nodesByUrl.set(node.url, node);
  lookupMap.set(normalizeKey(node.url), node.url);
  lookupMap.set(normalizeKey(node.id), node.url);
  lookupMap.set(normalizeKey(node.label), node.url);
  for (const alias of aliases) {
    if (alias) lookupMap.set(normalizeKey(alias), node.url);
  }
}

function walkSurface(baseDir, handler, relPrefix = '') {
  if (!fs.existsSync(baseDir)) return;
  const entries = fs.readdirSync(baseDir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(baseDir, entry.name);
    const relPath = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      walkSurface(fullPath, handler, relPath);
    } else if (entry.name.endsWith('.md') && !entry.name.includes('Index')) {
      handler(fullPath, relPath, entry.name);
    }
  }
}

console.log('Scanning published surfaces (blog/ + garden/)...');

// 1. Scan Garden posts (`blog/`)
walkSurface(path.join(rootDir, 'blog'), (fullPath, relPath, fileName) => {
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  const relNoExt = relPath.replace(/\.md$/, '');
  const astroId = computeAstroSlug(relNoExt, data.slug);
  const slug = data.slug || astroId.split('/')[0];
  const url = `/garden/${slug}`;
  const fallbackName = fileName === 'index.md' ? relPath.split('/')[0] : fileName;
  const label = extractTitle(body, data, fallbackName);
  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => String(t).toLowerCase().trim()).filter(Boolean)
    : data.tags
      ? [String(data.tags).toLowerCase().trim()]
      : [];

  registerNode(
    {
      id: `garden/${slug}`,
      url,
      label,
      category: 'garden',
      date: data.date ? String(data.date) : '',
      tags,
      connections: 0,
      wikilinks: extractWikilinks(body),
      mdLinks: extractInternalMarkdownLinks(body),
    },
    [slug, fallbackName.replace(/\.md$/, ''), relNoExt]
  );
});

// 2. Scan Slip-Box notes (`garden/slip-box/`)
walkSurface(path.join(rootDir, 'garden/slip-box'), (fullPath, relPath, fileName) => {
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  const relNoExt = relPath.replace(/\.md$/, '');
  const slug = computeAstroSlug(relNoExt, data.slug);
  const url = `/slip-box/${slug}`;
  const baseName = fileName.replace(/\.md$/, '');
  const label = extractTitle(body, data, baseName);
  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => String(t).toLowerCase().trim()).filter(Boolean)
    : data.tags
      ? [String(data.tags).toLowerCase().trim()]
      : [];

  registerNode(
    {
      id: `slip-box/${slug}`,
      url,
      label,
      category: inferSlipBoxCategory(relPath),
      date: data.date ? String(data.date) : '',
      tags,
      connections: 0,
      wikilinks: extractWikilinks(body),
      mdLinks: extractInternalMarkdownLinks(body),
    },
    [baseName, relNoExt, `slip-box/${relNoExt}`, slug]
  );
});

// 3. Scan curated Daily Notes (`garden/daily-notes/`)
walkSurface(path.join(rootDir, 'garden/daily-notes'), (fullPath, relPath, fileName) => {
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  const relNoExt = relPath.replace(/\.md$/, '');
  const slug = computeAstroSlug(relNoExt, data.slug);
  const url = `/garden/${slug}`;
  const baseName = fileName.replace(/\.md$/, '');
  const label = extractTitle(body, data, baseName);
  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => String(t).toLowerCase().trim()).filter(Boolean)
    : data.tags
      ? [String(data.tags).toLowerCase().trim()]
      : [];

  const aliases = [baseName, relNoExt, `daily-notes/${relNoExt}`, slug];
  const dateMatch = baseName.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dateMatch) {
    const [, year, month, day] = dateMatch;
    const d = new Date(Number(year), Number(month) - 1, Number(day));
    const dayNum = Number(day);
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = dayNum % 100;
    const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
    const monthName = d.toLocaleDateString('en-US', { month: 'long' });
    aliases.push(`${monthName} ${dayNum}${suffix}, ${year}`);
  }

  registerNode(
    {
      id: `daily-notes/${slug}`,
      url,
      label,
      category: 'daily-notes',
      date: baseName.match(/^\d{4}-\d{2}-\d{2}$/) ? baseName : '',
      tags,
      connections: 0,
      wikilinks: extractWikilinks(body),
      mdLinks: extractInternalMarkdownLinks(body),
    },
    aliases
  );
});

console.log(`Found ${nodesByUrl.size} published node(s)`);

// Build links (undirected deduplication so pairs don't double-render)
const links = [];
const linkMap = new Map(); // canonicalPairKey -> link object

function addEdge(urlA, urlB, kind) {
  if (!urlA || !urlB || urlA === urlB) return;
  const nodeA = nodesByUrl.get(urlA);
  const nodeB = nodesByUrl.get(urlB);
  if (!nodeA || !nodeB) return;

  const [u, v] = urlA < urlB ? [urlA, urlB] : [urlB, urlA];
  const pairKey = `${u}||${v}`;

  if (linkMap.has(pairKey)) {
    // Upgrade `tag` edge to `link` if an explicit wikilink/markdown link also exists
    if (kind === 'link' && linkMap.get(pairKey).kind === 'tag') {
      linkMap.get(pairKey).kind = 'link';
    }
    return;
  }

  const edge = { source: nodeA.id, target: nodeB.id, kind };
  linkMap.set(pairKey, edge);
  links.push(edge);
  nodeA.connections++;
  nodeB.connections++;
}

// 1. Explicit wikilinks & internal markdown links
for (const node of nodesByUrl.values()) {
  for (const wl of node.wikilinks) {
    const targetUrl = lookupMap.get(normalizeKey(wl));
    if (targetUrl) addEdge(node.url, targetUrl, 'link');
  }
  for (const ml of node.mdLinks) {
    const targetUrl = lookupMap.get(normalizeKey(ml));
    if (targetUrl) addEdge(node.url, targetUrl, 'link');
  }
}

// 2. Sparse thematic tag bridges (connects Garden <-> Slip-Box & series posts without hairballs)
const tagBuckets = new Map();
for (const node of nodesByUrl.values()) {
  for (const tag of node.tags) {
    if (!tagBuckets.has(tag)) tagBuckets.set(tag, []);
    tagBuckets.get(tag).push(node);
  }
}

for (const [, bucket] of tagBuckets.entries()) {
  if (bucket.length < 2) continue;
  bucket.sort((a, b) => (a.date || a.id).localeCompare(b.date || b.id));
  for (let i = 0; i < bucket.length - 1; i++) {
    addEdge(bucket[i].url, bucket[i + 1].url, 'tag');
  }
}

// 3. Zettelkasten Folgezettel alphanumeric hierarchy (e.g. 1a -> 1b -> 1c, 2a -> 2a1 -> 2a2, 2a -> 2b -> 2c)
const folgezettelMap = new Map(); // code (e.g. "2a1") -> node
for (const node of nodesByUrl.values()) {
  if (node.category !== 'permanent-notes') continue;
  const m = node.label.match(/^(\d+[a-z]+(?:\d+[a-z]*)*)\b/i);
  if (m) {
    folgezettelMap.set(m[1].toLowerCase(), node);
  }
}

const folgezettelCodes = Array.from(folgezettelMap.keys()).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true })
);

for (const code of folgezettelCodes) {
  const node = folgezettelMap.get(code);
  // Connect child to parent (e.g. "2a1" -> "2a")
  const parentCode = code.slice(0, -1);
  if (parentCode && folgezettelMap.has(parentCode)) {
    addEdge(folgezettelMap.get(parentCode).url, node.url, 'link');
  }
  // Connect sequential siblings (e.g. "1a" -> "1b" -> "1c", "2a1" -> "2a2")
  const lastChar = code.charCodeAt(code.length - 1);
  if (lastChar > 48) {
    const prevSibling = code.slice(0, -1) + String.fromCharCode(lastChar - 1);
    if (folgezettelMap.has(prevSibling)) {
      addEdge(folgezettelMap.get(prevSibling).url, node.url, 'link');
    }
  }
}

// Bridge slip-box / second-brain permanent notes (`2a`, `2b`) with the Obsidian garden essay
const obsidianGardenUrl = lookupMap.get('why-switch-to-obsidian');
if (obsidianGardenUrl && folgezettelMap.has('2b')) {
  addEdge(obsidianGardenUrl, folgezettelMap.get('2b').url, 'tag');
}

console.log(`Created ${links.length} link(s)`);

// Deterministic seeded 2D force-directed layout so coordinates are stable & ready on first paint
function hashString(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function computeDeterministicLayout(nodeList, edgeList) {
  const n = nodeList.length;
  if (n === 0) return;
  if (n === 1) {
    nodeList[0].x = 0.85;
    nodeList[0].y = 0.45;
    return;
  }

  const idToIdx = new Map(nodeList.map((nd, i) => [nd.id, i]));
  const px = new Float64Array(n);
  const py = new Float64Array(n);
  const vx = new Float64Array(n);
  const vy = new Float64Array(n);
  const targetSide = new Float64Array(n); // -1 for left margin (Garden), +1 for right margin (Slip-Box)

  for (let i = 0; i < n; i++) {
    const h1 = hashString(nodeList[i].id);
    const h2 = hashString(`${nodeList[i].id}:y`);
    const isLeft = nodeList[i].category === 'garden' || nodeList[i].category === 'daily-notes';
    const side = isLeft ? -1 : 1;
    targetSide[i] = side;
    px[i] = side * 0.6 + (((h1 % 1000) / 1000) - 0.5) * 0.35;
    py[i] = (((h2 % 1000) / 1000) - 0.5) * 1.4;
  }

  const iterations = 420;
  const k = Math.sqrt(2.4 / n);

  for (let iter = 0; iter < iterations; iter++) {
    const temp = 0.14 * (1 - iter / iterations);
    vx.fill(0);
    vy.fill(0);

    // Repulsion between nodes on the same side (and gentle cross-side repulsion)
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = px[i] - px[j];
        const dy = py[i] - py[j];
        const distSq = dx * dx + dy * dy + 0.0006;
        const dist = Math.sqrt(distSq);
        const sameSide = targetSide[i] === targetSide[j] ? 1.0 : 0.25;
        const force = ((k * k * 0.48) / distSq) * sameSide;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        vx[i] += fx;
        vy[i] += fy;
        vx[j] -= fx;
        vy[j] -= fy;
      }
    }

    // Spring attraction along edges (strong for same-side neighbors, gentle vertical alignment for cross-side bridges)
    for (const edge of edgeList) {
      const i = idToIdx.get(edge.source);
      const j = idToIdx.get(edge.target);
      if (i === undefined || j === undefined) continue;
      const dx = px[j] - px[i];
      const dy = py[j] - py[i];
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.0001;
      const sameSide = targetSide[i] === targetSide[j];
      if (sameSide) {
        const ideal = edge.kind === 'link' ? k * 0.65 : k * 0.9;
        const strength = edge.kind === 'link' ? 0.24 : 0.14;
        const force = (dist - ideal) * strength;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        vx[i] += fx;
        vy[i] += fy;
        vx[j] -= fx;
        vy[j] -= fy;
      } else {
        // Align Y across margins without pulling nodes into the center text column
        const fy = dy * 0.05;
        vy[i] += fy;
        vy[j] -= fy;
      }
    }

    // Anchor each side cleanly to its margin band
    for (let i = 0; i < n; i++) {
      const anchorX = targetSide[i] * 0.65;
      vx[i] += (anchorX - px[i]) * 0.18;
      vy[i] -= py[i] * 0.055;

      const stepLen = Math.sqrt(vx[i] * vx[i] + vy[i] * vy[i]) + 1e-6;
      const capped = Math.min(stepLen, temp);
      px[i] += (vx[i] / stepLen) * capped;
      py[i] += (vy[i] / stepLen) * capped;
    }
  }

  // Normalize left-side nodes into x=[0.08..0.42], right-side nodes into x=[0.58..0.92], y=[0.12..0.88]
  let minY = Infinity, maxY = -Infinity;
  let leftMinX = Infinity, leftMaxX = -Infinity;
  let rightMinX = Infinity, rightMaxX = -Infinity;

  for (let i = 0; i < n; i++) {
    if (py[i] < minY) minY = py[i];
    if (py[i] > maxY) maxY = py[i];
    if (targetSide[i] < 0) {
      if (px[i] < leftMinX) leftMinX = px[i];
      if (px[i] > leftMaxX) leftMaxX = px[i];
    } else {
      if (px[i] < rightMinX) rightMinX = px[i];
      if (px[i] > rightMaxX) rightMaxX = px[i];
    }
  }

  const spanY = Math.max(maxY - minY, 0.001);
  const leftSpanX = Math.max(leftMaxX - leftMinX, 0.001);
  const rightSpanX = Math.max(rightMaxX - rightMinX, 0.001);

  for (let i = 0; i < n; i++) {
    const ny = 0.12 + ((py[i] - minY) / spanY) * 0.76;
    let nx;
    if (targetSide[i] < 0) {
      nx = 0.08 + ((px[i] - leftMinX) / leftSpanX) * 0.34;
    } else {
      nx = 0.58 + ((px[i] - rightMinX) / rightSpanX) * 0.34;
    }
    nodeList[i].x = Number(nx.toFixed(4));
    nodeList[i].y = Number(ny.toFixed(4));
  }
}

const outputNodes = Array.from(nodesByUrl.values()).map((node) => ({
  id: node.id,
  url: node.url,
  label: node.label,
  category: node.category,
  connections: node.connections,
  x: 0.5,
  y: 0.5,
}));

computeDeterministicLayout(outputNodes, links);

const outputData = {
  nodes: outputNodes,
  links,
};

const outputPath = path.join(rootDir, 'public/mindmap-data.json');
fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));

console.log(`✓ Generated mindmap data: ${outputPath}`);
console.log(`  Nodes: ${outputNodes.length}`);
console.log(`  Links: ${links.length}`);
