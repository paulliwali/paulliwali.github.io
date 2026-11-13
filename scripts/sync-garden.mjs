#!/usr/bin/env node
/**
 * Sync opted-in notes from the private Obsidian vault (`second-brain/`) into `garden/`.
 *
 * Security / Privacy Model (Deny-by-default):
 * 1. Nothing in `second-brain/` is copied unless its YAML frontmatter explicitly sets `publish: true`.
 * 2. Personal journal entries (`second-brain/daily-notes/`) require BOTH `publish: true` AND
 *    `allow_public_journal: true` to guard against accidental template edits.
 * 3. Obsidian `%% ... %%` comments and `<!-- private -->...<!-- /private -->` blocks are stripped.
 * 4. `[[Wikilinks]]` to unpublished notes are converted to plain text (no broken links, no path leaks),
 *    and wikilink targets matching sensitive title/blocklist rules are blocked.
 * 5. Every synced note must pass `scanMarkdownForLeaks` (secrets, SSN/card/phone/email, financial,
 *    compensation, interview/HR, and `.privacy-blocklist.txt`).
 * 6. Notes removed or unmarked (`publish: false` / deleted) in `second-brain/` are pruned from `garden/`.
 *
 * Usage:
 *   npm run sync:garden              # Sync approved notes & regenerate mindmap
 *   npm run sync:garden -- --dry-run # Preview without modifying files
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import {
  ROOT_DIR,
  parseFrontmatter,
  stripPrivateBlocks,
  loadLocalBlocklist,
  scanMarkdownForLeaks,
  SENSITIVE_TITLE_RULES,
} from './privacy-rules.mjs';

const args = new Set(process.argv.slice(2));
const isDryRun = args.has('--dry-run') || args.has('-n');

const vaultDir = path.join(ROOT_DIR, 'second-brain');
const gardenDir = path.join(ROOT_DIR, 'garden');
const blogDir = path.join(ROOT_DIR, 'blog');

if (!fs.existsSync(vaultDir)) {
  console.log('No local `second-brain/` vault found — skipping sync (using committed `garden/` as-is).');
  process.exit(0);
}

const localBlocklist = loadLocalBlocklist(ROOT_DIR);

function walkMarkdown(dir, relBase = '') {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = relBase ? `${relBase}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      results.push(...walkMarkdown(fullPath, relPath));
    } else if (entry.name.endsWith('.md')) {
      results.push({ fullPath, relPath });
    }
  }
  return results;
}

function extractTitle(body, frontmatter, filename) {
  if (frontmatter.title) return String(frontmatter.title).trim();
  const m = body.match(/^#\s+(.+)$/m);
  if (m) return m[1].trim();
  return filename.replace(/\.md$/, '');
}

// 1. Warn if any unorganized root / roam note has `publish: true` so nothing is silently ignored.
for (const extraDir of [
  { dir: vaultDir, shallow: true, label: 'second-brain/ (unorganized root)' },
  { dir: path.join(vaultDir, 'roam'), shallow: false, label: 'second-brain/roam/' },
]) {
  if (!fs.existsSync(extraDir.dir)) continue;
  const entries = extraDir.shallow
    ? fs
        .readdirSync(extraDir.dir, { withFileTypes: true })
        .filter((e) => e.isFile() && e.name.endsWith('.md') && !e.name.startsWith('.'))
        .map((e) => ({ fullPath: path.join(extraDir.dir, e.name), relPath: e.name }))
    : walkMarkdown(extraDir.dir);

  for (const item of entries) {
    const raw = fs.readFileSync(item.fullPath, 'utf8');
    const { data } = parseFrontmatter(raw);
    if (data.publish === true) {
      console.warn(
        `NOTICE  second-brain/${item.relPath} has \`publish: true\` in ${extraDir.label}. ` +
          `Move it into \`second-brain/slip-box/\` (or \`blog/\`) to publish it.`
      );
    }
  }
}

// 2. Collect opted-in candidates from `second-brain/slip-box` and `second-brain/daily-notes`.
const candidates = [];

for (const item of walkMarkdown(path.join(vaultDir, 'slip-box'))) {
  if (path.basename(item.relPath).includes('Index')) continue;
  const raw = fs.readFileSync(item.fullPath, 'utf8');
  const parsed = parseFrontmatter(raw);
  if (parsed.data.publish === true) {
    candidates.push({
      sourcePath: item.fullPath,
      vaultRel: `second-brain/slip-box/${item.relPath}`,
      destRel: `slip-box/${item.relPath}`,
      raw,
      parsed,
      isDaily: false,
    });
  }
}

for (const item of walkMarkdown(path.join(vaultDir, 'daily-notes'))) {
  const raw = fs.readFileSync(item.fullPath, 'utf8');
  const parsed = parseFrontmatter(raw);
  if (parsed.data.publish === true) {
    if (parsed.data.allow_public_journal !== true) {
      console.warn(
        `SKIPPED second-brain/daily-notes/${item.relPath}: journal notes require BOTH \`publish: true\` AND \`allow_public_journal: true\`.`
      );
      continue;
    }
    candidates.push({
      sourcePath: item.fullPath,
      vaultRel: `second-brain/daily-notes/${item.relPath}`,
      destRel: `daily-notes/${item.relPath}`,
      raw,
      parsed,
      isDaily: true,
    });
  }
}

// 3. Build the set of publicly resolvable note names (`blog/` + opted-in `candidates`).
const publicTargets = new Set();
const addTargetKey = (s) => {
  if (s) publicTargets.add(String(s).toLowerCase().trim());
};

for (const blogItem of walkMarkdown(blogDir)) {
  const raw = fs.readFileSync(blogItem.fullPath, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  const baseName = path.basename(blogItem.relPath, '.md');
  const folderName = blogItem.relPath.split('/')[0];
  addTargetKey(data.title);
  addTargetKey(data.slug);
  if (baseName !== 'index') addTargetKey(baseName);
  addTargetKey(folderName);
  addTargetKey(extractTitle(body, data, baseName));
}

for (const cand of candidates) {
  const baseName = path.basename(cand.destRel, '.md');
  const noExtRel = cand.destRel.replace(/\.md$/, '');
  addTargetKey(baseName);
  addTargetKey(noExtRel);
  addTargetKey(noExtRel.replace(/^slip-box\//, ''));
  addTargetKey(extractTitle(cand.parsed.body, cand.parsed.data, baseName));
}

// 4. Strip private comments, sanitize unpublished wikilinks, and scan for leaks.
const allErrors = [];
const processedFiles = new Map(); // destRel -> processedContent
let unlinkedCount = 0;

function rewriteUnpublishedWikilinks(markdown, candidate) {
  const segments = markdown.split(/(```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]+`)/g);
  return segments
    .map((segment, idx) => {
      if (idx % 2 === 1) return segment; // code fence or inline code

      // Match optional `!` embed + `[[target|alias]]` or `[[target#heading|alias]]`
      return segment.replace(/(!?)\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g, (full, bang, rawTarget, alias) => {
        const target = rawTarget.trim();
        const display = (alias ?? target).trim();

        // Check if wikilink target itself reveals a sensitive private title or blocklist term
        for (const rule of localBlocklist) {
          if (rule.regex.test(target)) {
            allErrors.push(`${candidate.vaultRel}: wikilink target matched ${rule.label}`);
          }
        }
        if (candidate.parsed.data.privacy_reviewed !== true) {
          for (const rule of SENSITIVE_TITLE_RULES) {
            if (rule.regex.test(target)) {
              allErrors.push(
                `${candidate.vaultRel}: wikilink [[${target}]] references a sensitive-looking private note (${rule.label})`
              );
            }
          }
        }

        if (bang === '!') {
          allErrors.push(
            `${candidate.vaultRel}: Obsidian media embed ![[${target}]] is not supported in public garden without copying asset to public/`
          );
          return '';
        }

        const targetKey = target.toLowerCase();
        if (publicTargets.has(targetKey)) {
          return full; // Target IS published — keep live wikilink!
        }

        unlinkedCount++;
        return display; // Target is private/unpublished — render clean plain text
      });
    })
    .join('');
}

for (const cand of candidates) {
  const stripped = stripPrivateBlocks(cand.raw);
  const sanitized = rewriteUnpublishedWikilinks(stripped, cand);

  const { hardFailures, heuristicFailures } = scanMarkdownForLeaks({
    filePath: cand.vaultRel,
    rawContent: sanitized,
    surface: 'garden',
    localBlocklist,
  });

  allErrors.push(...hardFailures);
  for (const hf of heuristicFailures) {
    allErrors.push(`${hf} (redact or add \`privacy_reviewed: true\` to frontmatter if verified safe)`);
  }

  processedFiles.set(cand.destRel, sanitized);
}

if (allErrors.length > 0) {
  console.error('\nSYNC BLOCKED — Potential personal / career-sensitive content detected:\n');
  for (const err of allErrors) {
    console.error(`  ✗ ${err}`);
  }
  console.error('\nNothing in `garden/` was modified.');
  process.exit(1);
}

// 5. Compare against existing files in `garden/` to compute writes & removals.
const existingGardenFiles = [
  ...walkMarkdown(path.join(gardenDir, 'slip-box'), 'slip-box'),
  ...walkMarkdown(path.join(gardenDir, 'daily-notes'), 'daily-notes'),
];

const toRemove = existingGardenFiles.filter((f) => !processedFiles.has(f.relPath));
let written = 0;
let unchanged = 0;

for (const [destRel, content] of processedFiles.entries()) {
  const destFull = path.join(gardenDir, destRel);
  const current = fs.existsSync(destFull) ? fs.readFileSync(destFull, 'utf8') : null;
  if (current === content) {
    unchanged++;
    continue;
  }
  written++;
  if (isDryRun) {
    console.log(`[dry-run] Would write garden/${destRel}`);
  } else {
    fs.mkdirSync(path.dirname(destFull), { recursive: true });
    fs.writeFileSync(destFull, content, 'utf8');
    console.log(`  + synced garden/${destRel}`);
  }
}

for (const stale of toRemove) {
  if (isDryRun) {
    console.log(`[dry-run] Would remove unpublished garden/${stale.relPath}`);
  } else {
    fs.unlinkSync(stale.fullPath);
    console.log(`  - removed garden/${stale.relPath}`);
  }
}

console.log(
  `${isDryRun ? '[dry-run] ' : ''}Garden sync complete: ` +
    `${processedFiles.size} published note(s) (${written} updated, ${unchanged} unchanged, ${toRemove.length} removed, ${unlinkedCount} private wikilink(s) unlinked).`
);

if (!isDryRun) {
  execFileSync(process.execPath, [path.join(ROOT_DIR, 'scripts/generate-mindmap.js')], {
    stdio: 'inherit',
  });
}
