import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Directories to scan
const dirs = [
  { base: path.join(rootDir, 'docs/slip-box'), prefix: 'slip-box' },
  { base: path.join(rootDir, 'docs/daily-notes'), prefix: 'daily-notes' },
  { base: path.join(rootDir, 'docs/digital-garden'), prefix: 'digital-garden' },
];

// Store all nodes and links
const nodes = new Map();
const links = [];

// Function to extract title from markdown content
function extractTitle(content, filename) {
  // Try to find # heading
  const headingMatch = content.match(/^#\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1].trim();
  }

  // Fallback to filename
  return filename.replace('.md', '').replace(/-/g, ' ');
}

// Function to extract wikilinks from markdown content
function extractWikilinks(content) {
  const wikilinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
  const links = [];
  let match;

  while ((match = wikilinkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }

  return links;
}

// Function to infer category from path
function inferCategory(filePath, prefix) {
  if (prefix === 'daily-notes') return 'daily';
  if (filePath.includes('reference-notes')) return 'reference-notes';
  if (filePath.includes('literature-notes')) return 'literature-notes';
  if (filePath.includes('permanent-notes')) return 'permanent-notes';
  if (filePath.includes('writing-bin')) return 'writing-bin';
  return 'default';
}

// Function to create a normalized ID for a node
function normalizeId(name) {
  return name.toLowerCase().trim();
}

// Function to scan directory recursively
function scanDirectory(dir, prefix, relativePath = '') {
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    const relPath = relativePath ? `${relativePath}/${file.name}` : file.name;

    if (file.isDirectory()) {
      // Skip hidden directories
      if (file.name.startsWith('.')) continue;
      scanDirectory(fullPath, prefix, relPath);
    } else if (file.name.endsWith('.md')) {
      // Skip special files
      if (file.name.startsWith('.') || file.name.includes('Index') || file.name.endsWith('.canvas')) {
        continue;
      }

      const content = fs.readFileSync(fullPath, 'utf-8');
      const fileName = file.name.replace('.md', '');
      const title = extractTitle(content, fileName);

      // Create node ID with path
      const nodeId = prefix ? `${prefix}/${relPath.replace('.md', '')}` : relPath.replace('.md', '');
      const normalizedNodeId = normalizeId(nodeId);

      // Extract wikilinks
      const wikilinks = extractWikilinks(content);

      // Determine category
      const category = inferCategory(fullPath, prefix);

      // Add or update node
      if (!nodes.has(normalizedNodeId)) {
        nodes.set(normalizedNodeId, {
          id: nodeId,
          label: title,
          category: category,
          connections: 0,
          wikilinks: wikilinks,
          // Store mappings for lookup
          filename: fileName,
          normalizedFilename: normalizeId(fileName),
        });
      }
    }
  }
}

// Scan all directories
console.log('Scanning directories...');
for (const { base, prefix } of dirs) {
  console.log(`  Scanning ${base}...`);
  scanDirectory(base, prefix);
}

console.log(`Found ${nodes.size} nodes`);

// Build a lookup map for resolving wikilinks
const lookupMap = new Map();
for (const [normalizedId, node] of nodes) {
  // Map by normalized ID
  lookupMap.set(normalizedId, node.id);

  // Map by normalized filename
  lookupMap.set(node.normalizedFilename, node.id);

  // Map by normalized title
  lookupMap.set(normalizeId(node.label), node.id);

  // For date files, also map formatted dates
  const dateMatch = node.filename.match(/^(\d{4})-(\d{2})-(\d{2})$/);
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

    lookupMap.set(normalizeId(formatted), node.id);
  }
}

// Resolve wikilinks to create connections
console.log('Resolving wikilinks...');
const linkSet = new Set(); // Use set to avoid duplicates

for (const [_, sourceNode] of nodes) {
  for (const wikilink of sourceNode.wikilinks) {
    const normalizedLink = normalizeId(wikilink);
    const targetId = lookupMap.get(normalizedLink);

    if (targetId && targetId !== sourceNode.id) {
      const linkKey = `${sourceNode.id}||${targetId}`;
      if (!linkSet.has(linkKey)) {
        links.push({
          source: sourceNode.id,
          target: targetId,
        });
        linkSet.add(linkKey);

        // Increment connection counts
        sourceNode.connections++;
        const targetNode = Array.from(nodes.values()).find(n => n.id === targetId);
        if (targetNode) {
          targetNode.connections++;
        }
      }
    }
  }
}

console.log(`Created ${links.length} links`);

// Prepare output data
const outputNodes = Array.from(nodes.values()).map(node => ({
  id: node.id,
  label: node.label,
  category: node.category,
  connections: node.connections,
}));

const outputData = {
  nodes: outputNodes,
  links: links,
};

// Write to file
const outputPath = path.join(rootDir, 'public/mindmap-data.json');
fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));

console.log(`✓ Generated mindmap data: ${outputPath}`);
console.log(`  Nodes: ${outputNodes.length}`);
console.log(`  Links: ${links.length}`);

// Print category breakdown
const categoryCount = {};
for (const node of outputNodes) {
  categoryCount[node.category] = (categoryCount[node.category] || 0) + 1;
}
console.log('\nCategory breakdown:');
for (const [category, count] of Object.entries(categoryCount)) {
  console.log(`  ${category}: ${count}`);
}
