#!/usr/bin/env node
/**
 * Publish-surface guard.
 *
 * Fails when:
 * 1. Anything private-looking is tracked by git (vault, Obsidian state, keys, local blocklist).
 * 2. Content collections in `src/content/config.ts` are re-pointed outside `blog/` and `garden/`.
 * 3. Any markdown file in `garden/` lacks explicit `publish: true` frontmatter (or a daily note
 *    lacks `allow_public_journal: true`).
 * 4. Any markdown file in `garden/` or `blog/` triggers PII / secret / career / financial /
 *    local-blocklist rules from `scripts/privacy-rules.mjs`.
 *
 * Runs in CI (`.github/workflows/content-guard.yml`, and as a step of the deploy
 * workflow) and locally via `npm run guard` / `npm run build`.
 */
import { execFileSync } from 'node:child_process';
import fs, { readFileSync } from 'node:fs';
import path from 'node:path';
import {
  ROOT_DIR,
  parseFrontmatter,
  loadLocalBlocklist,
  scanMarkdownForLeaks,
} from './privacy-rules.mjs';

const BLOCKED = [
  [/^second-brain\//, 'private vault'],
  [/^docs\//, 'legacy vault (pre-2026-07 layout)'],
  [/^\.obsidian\//, 'Obsidian workspace state'],
  [/^\.trash\//, 'Obsidian trash'],
  [/\.smart-connections\//, 'Obsidian embeddings (contain note text)'],
  [/settings\.local\.json$/, 'local agent/editor permissions'],
  [/^\.privacy-blocklist\.txt$/, 'local privacy blocklist (contains private terms)'],
  [/(^|\/)\.env(\.|$)/, 'environment file'],
  [/\.(pem|key|p12)$/, 'key material'],
  [/(^|\/)id_(rsa|ed25519|ecdsa)/, 'private key'],
  [/\.ajson$/, 'embedding store'],
];

const ALLOWED_COLLECTION_BASES = ['blog', 'garden'];
const PUBLISHABLE = /^(blog|garden)\//;
const OK_EXT = /\.(md|markdown|png|jpe?g|webp|gif|svg|avif|mp4|mov|gitkeep)$/i;

let failed = false;
const fail = (msg) => {
  console.error(`BLOCKED  ${msg}`);
  failed = true;
};

const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: ROOT_DIR, encoding: 'utf8' })
  .split('\0')
  .filter(Boolean);

for (const file of tracked) {
  for (const [re, label] of BLOCKED) {
    if (re.test(file)) {
      fail(`${file}  (${label})`);
      break;
    }
  }
}

// The collections must only ever read blog/ and garden/.
const config = readFileSync(path.join(ROOT_DIR, 'src/content/config.ts'), 'utf8');
for (const match of config.matchAll(/path\.join\(projectRoot,\s*'([^']+)'\)/g)) {
  const dir = match[1];
  const allowed = ALLOWED_COLLECTION_BASES.some((base) => dir === base || dir.startsWith(`${base}/`));
  if (!allowed) {
    fail(`src/content/config.ts reads collection base '${dir}' — only blog/ and garden/ may be published`);
  }
}

// Published directories may only contain markdown and media.
for (const file of tracked) {
  if (PUBLISHABLE.test(file) && !OK_EXT.test(file)) {
    fail(`${file}  (unexpected file type under a published directory)`);
  }
}

// Walk both `garden/` and `blog/` on disk (catches staged, tracked, AND untracked local files before build).
function walkPublishedMarkdown(relDir) {
  const fullDir = path.join(ROOT_DIR, relDir);
  if (!fs.existsSync(fullDir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(fullDir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const childRel = `${relDir}/${entry.name}`;
    if (entry.isDirectory()) {
      results.push(...walkPublishedMarkdown(childRel));
    } else if (/\.(md|markdown)$/i.test(entry.name)) {
      results.push(childRel);
    }
  }
  return results;
}

const localBlocklist = loadLocalBlocklist(ROOT_DIR);
const gardenMarkdown = walkPublishedMarkdown('garden');
const blogMarkdown = walkPublishedMarkdown('blog');

for (const relFile of gardenMarkdown) {
  const raw = readFileSync(path.join(ROOT_DIR, relFile), 'utf8');
  const { data } = parseFrontmatter(raw);

  if (data.publish !== true) {
    fail(`${relFile}  (missing \`publish: true\` frontmatter — never copy unvetted notes directly into garden/)`);
  }
  if (relFile.startsWith('garden/daily-notes/') && data.allow_public_journal !== true) {
    fail(`${relFile}  (daily journal note missing \`allow_public_journal: true\` frontmatter)`);
  }

  const { hardFailures, heuristicFailures } = scanMarkdownForLeaks({
    filePath: relFile,
    rawContent: raw,
    surface: 'garden',
    localBlocklist,
  });
  for (const hf of hardFailures) fail(hf);
  for (const sf of heuristicFailures) fail(`${sf} (redact or set \`privacy_reviewed: true\`)`);
}

for (const relFile of blogMarkdown) {
  const raw = readFileSync(path.join(ROOT_DIR, relFile), 'utf8');
  const { hardFailures } = scanMarkdownForLeaks({
    filePath: relFile,
    rawContent: raw,
    surface: 'blog',
    localBlocklist,
  });
  for (const hf of hardFailures) fail(hf);
}

if (failed) {
  console.error('\nPublish-surface guard FAILED — nothing was deployed.');
  process.exit(1);
}

console.log(
  `Publish-surface guard passed (${tracked.length} tracked files; ` +
    `${blogMarkdown.length} blog post(s), ${gardenMarkdown.length} garden note(s) verified).`
);
