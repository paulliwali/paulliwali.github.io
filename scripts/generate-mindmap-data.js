const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, '../docs');
const outputPath = path.join(__dirname, '../src/data');
const outputFilePath = path.join(outputPath, 'mindmap-data.json');

const excludedDirs = ['.obsidian', '.smart-connections', 'templates'];
const excludedFiles = ['devdocs.json']; // Add any other specific files to exclude

function getNoteId(filePath, basePath) {
  const relativePath = path.relative(basePath, filePath);
  // Remove .md extension and normalize path separators for ID
  return relativePath.replace(/\\/g, '/').replace(/\.md$/, '');
}

function getNoteLabel(noteId) {
  // Get the filename part of the ID
  const filename = noteId.split('/').pop();
  // Convert kebab-case or snake_case to Title Case
  return filename
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getNoteCategory(noteId) {
  // Determine category based on file path
  if (noteId.startsWith('daily-notes/')) return 'daily';
  if (noteId.startsWith('slip-box/')) return 'slipbox';
  if (noteId.startsWith('blog/')) return 'blog';
  if (noteId.startsWith('roam/')) return 'roam';
  return 'default';
}

function findMarkdownFiles(dir, basePath) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (!excludedDirs.includes(item.name)) {
        files = files.concat(findMarkdownFiles(fullPath, basePath));
      }
    } else if (item.isFile() && item.name.endsWith('.md') && !excludedFiles.includes(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function parseMarkdownLinks(content, currentNoteId, allNoteIds) {
  const links = [];
  // Simplified regex: captures any characters between [[]] that are not [ or ]
  const linkRegex = /\[\[([^\]]+)\]\]/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    let targetName = match[1].trim(); // Get the captured group (the link text before any | or #)

    // Normalize: remove .md, leading/trailing slashes
    targetName = targetName.replace(/\.md$/, '');
    targetName = targetName.replace(/^\/|\/$/g, '');

    const foundTargetId = allNoteIds.find(id => {
        const idFileName = id.split('/').pop();
        // Match if the full ID is the same, or if the filename part of the ID is the same
        return id === targetName || idFileName === targetName;
    });

    if (foundTargetId) {
      if (currentNoteId !== foundTargetId) { // Avoid self-loops
        links.push({ source: currentNoteId, target: foundTargetId });
      }
    } else {
      // console.warn(\`Warning: Could not resolve link "${match[0]}" (parsed as "${targetName}") in note "${currentNoteId}"\`);
    }
  }
  return links;
}

function generateMindMapData() {
  if (!fs.existsSync(docsPath)) {
    console.error(`Docs directory not found: ${docsPath}`);
    return;
  }

  const markdownFiles = findMarkdownFiles(docsPath, docsPath);
  const nodes = [];
  const edges = [];
  
  const allNoteIds = markdownFiles.map(file => getNoteId(file, docsPath));

  for (const file of markdownFiles) {
    const noteId = getNoteId(file, docsPath);
    const noteLabel = getNoteLabel(noteId);
    const category = getNoteCategory(noteId);

    const content = fs.readFileSync(file, 'utf-8');
    const fileLinks = parseMarkdownLinks(content, noteId, allNoteIds);
    edges.push(...fileLinks);

    nodes.push({
      id: noteId,
      label: noteLabel,
      category: category,
      connections: 0 // Will be calculated after all edges are collected
    });
  }

  // Calculate connection counts
  const connectionCounts = {};
  edges.forEach(edge => {
    connectionCounts[edge.source] = (connectionCounts[edge.source] || 0) + 1;
    connectionCounts[edge.target] = (connectionCounts[edge.target] || 0) + 1;
  });

  // Update nodes with connection counts
  nodes.forEach(node => {
    node.connections = connectionCounts[node.id] || 0;
  });

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  fs.writeFileSync(outputFilePath, JSON.stringify({ nodes, edges }, null, 2));
  console.log(`Mind map data generated at ${outputFilePath}`);
  console.log(`Found ${nodes.length} notes and ${edges.length} links.`);
}

generateMindMapData();
