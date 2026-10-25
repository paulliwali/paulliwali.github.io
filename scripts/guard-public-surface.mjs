#!/usr/bin/env node
/**
 * Publish-surface guard.
 *
 * Fails when anything private-looking is tracked by git, or when the content
 * collections are re-pointed outside `blog/` and `garden/`.
 *
 * Runs in CI (`.github/workflows/content-guard.yml`, and as a step of the deploy
 * workflow) and locally via `npm run guard`.
 *
 * A git pre-commit hook is NOT enough here: the vault is also committed straight
 * from a phone by an external git client (GitSync), which bypasses local hooks.
 * This guard is the gate that actually holds.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const BLOCKED = [
  [/^second-brain\//, 'private vault'],
  [/^docs\//, 'legacy vault (pre-2026-07 layout)'],
  [/^\.obsidian\//, 'Obsidian workspace state'],
  [/^\.trash\//, 'Obsidian trash'],
  [/\.smart-connections\//, 'Obsidian embeddings (contain note text)'],
  [/settings\.local\.json$/, 'local agent/editor permissions'],
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

const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' })
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
const config = readFileSync('src/content/config.ts', 'utf8');
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

if (failed) {
  console.error('\nPublish-surface guard FAILED — nothing was deployed.');
  console.error('If a path above is genuinely public, remove it from BLOCKED in scripts/guard-public-surface.mjs in the same commit.');
  process.exit(1);
}

console.log(`Publish-surface guard passed (${tracked.length} tracked files; published dirs: blog/, garden/).`);
