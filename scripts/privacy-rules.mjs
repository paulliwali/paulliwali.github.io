/**
 * Shared privacy parsing, stripping, and sensitive-content scanning rules.
 *
 * Used by:
 * - `scripts/sync-garden.mjs` (pre-flight check before copying from `second-brain/` to `garden/`)
 * - `scripts/guard-public-surface.mjs` (build & CI gate on `garden/` and `blog/`)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT_DIR = path.resolve(__dirname, '..');

/**
 * Lightweight YAML frontmatter parser for Obsidian / Astro markdown files.
 */
export function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    return { data: {}, body: content, hasFrontmatter: false, rawFrontmatter: '' };
  }

  const rawFrontmatter = match[1];
  const body = content.slice(match[0].length);
  const data = {};

  const lines = rawFrontmatter.split(/\r?\n/);
  let currentArrayKey = null;

  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const listItemMatch = line.match(/^\s*-\s+(.+)$/);
    if (listItemMatch && currentArrayKey) {
      data[currentArrayKey].push(unquote(listItemMatch[1].trim()));
      continue;
    }

    currentArrayKey = null;
    const kvMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kvMatch) continue;

    const key = kvMatch[1];
    const rawVal = kvMatch[2].trim();

    if (rawVal === '') {
      data[key] = [];
      currentArrayKey = key;
    } else if (rawVal === 'true') {
      data[key] = true;
    } else if (rawVal === 'false') {
      data[key] = false;
    } else if (rawVal === 'null' || rawVal === '~') {
      data[key] = null;
    } else if (rawVal.startsWith('[') && rawVal.endsWith(']')) {
      const inner = rawVal.slice(1, -1).trim();
      data[key] = inner
        ? inner.split(',').map((item) => unquote(item.trim())).filter(Boolean)
        : [];
    } else {
      data[key] = unquote(rawVal);
    }
  }

  return { data, body, hasFrontmatter: true, rawFrontmatter };
}

function unquote(str) {
  if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
    return str.slice(1, -1);
  }
  return str;
}

/**
 * Strip Obsidian `%% ... %%` comments and `<!-- private --> ... <!-- /private -->`
 * sections outside of fenced code blocks so private marginalia never leave the vault.
 */
export function stripPrivateBlocks(markdown) {
  // Split out fenced code blocks so `%%` (e.g. Jupyter cell magics) in code stays intact.
  const segments = markdown.split(/(```[\s\S]*?```|~~~[\s\S]*?~~~)/g);
  return segments
    .map((segment, idx) => {
      if (idx % 2 === 1) return segment; // fenced code block
      return segment
        .replace(/<!--\s*private\s*-->[\s\S]*?<!--\s*\/private\s*-->/gi, '')
        .replace(/%%[\s\S]*?%%/g, '');
    })
    .join('');
}

/**
 * Load optional local `.privacy-blocklist.txt` (gitignored).
 */
export function loadLocalBlocklist(rootDir = ROOT_DIR) {
  const blocklistPath = path.join(rootDir, '.privacy-blocklist.txt');
  if (!fs.existsSync(blocklistPath)) return [];

  const rules = [];
  const lines = fs.readFileSync(blocklistPath, 'utf8').split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    if (line.startsWith('re:')) {
      rules.push({
        label: 'local .privacy-blocklist.txt regex',
        regex: new RegExp(line.slice(3), 'i'),
      });
    } else {
      const escaped = line.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      rules.push({
        label: 'local .privacy-blocklist.txt term',
        regex: new RegExp(`\\b${escaped}\\b`, 'i'),
      });
    }
  }
  return rules;
}

// Hard blockers: NEVER allowed in any published file (`blog/` or `garden/`), cannot be overridden.
const HARD_CONTENT_RULES = [
  { label: 'OpenAI / API secret key', regex: /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/ },
  { label: 'GitHub token', regex: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/ },
  { label: 'AWS access key ID', regex: /\bAKIA[0-9A-Z]{16}\b/ },
  { label: 'Google API key', regex: /\bAIza[0-9A-Za-z_-]{35}\b/ },
  { label: 'PEM private key header', regex: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { label: 'US SSN pattern', regex: /\b(?!000|666|9\d\d)\d{3}-(?!00)\d{2}-(?!0000)\d{4}\b/ },
  { label: 'Formatted 16-digit card number', regex: /\b(?:\d{4}[ -]){3}\d{4}\b/ },
];

// Filename / title red-flag rules for Obsidian notes (`garden/`), overridable ONLY with `privacy_reviewed: true`.
export const SENSITIVE_TITLE_RULES = [
  { label: 'financial plan / recap title', regex: /\bfinancial\s+(?:plan|recap|tracker|goals?)\b/i },
  { label: 'credit card / churning tracker title', regex: /\bcredit[- ]card\b|\bchurning\b|\btrackers?\b/i },
  { label: 'wardrobe / personal body tracker title', regex: /\bwardrobe\b/i },
  { label: 'interview prep / job hunt title', regex: /\binterview\s+prep\b|\bjob\s+hunt\b|\boffer\s+negotiation\b/i },
  { label: 'personal relocation / residence title', regex: /\brelocation\s+to\b/i },
];

// Body heuristic rules for Obsidian notes (`garden/`), overridable ONLY with `privacy_reviewed: true`.
const HEURISTIC_CONTENT_RULES = [
  {
    label: 'financial / account / net-worth details',
    regex: /\b(?:net\s+worth|routing\s+number|account\s+number|credit\s+score|credit\s+limit|sign-up\s+bonus|roth\s+ira\s+balance|401\(?k\)?\s+balance|down\s+payment)\b/i,
  },
  {
    label: 'compensation / job-offer details',
    regex: /\b(?:total\s+comp(?:ensation)?|base\s+salary|sign-on\s+bonus|offer\s+letter|counter-?offer|rsu\s+grant|vesting\s+schedule)\b/i,
  },
  {
    label: 'career / interview / HR sensitivity',
    regex: /\b(?:interview\s+prep|onsite\s+interview|phone\s+screen|hiring\s+manager|recruiter\s+call|perf(?:ormance)?\s+review|promo\s+packet|confidential|internal\s+only|under\s+nda)\b/i,
  },
  {
    label: 'phone number pattern',
    regex: /(?:\+?1[-.\s])?\([2-9]\d{2}\)\s*\d{3}[-.\s]\d{4}\b|\b[2-9]\d{2}-\d{3}-\d{4}\b/,
  },
  {
    label: 'email address in note',
    regex: /\b(?!.*@(?:example\.com|users\.noreply\.github\.com))[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
  },
  {
    label: 'personal body measurement entry',
    regex: /\b(?:inseam|waist|chest|neck|sleeve)\s*:\s*\d{2}\b/i,
  },
];

/**
 * Scan a markdown file for potential personal, financial, or career leaks.
 *
 * @param {object} opts
 * @param {string} opts.filePath - Path for reporting
 * @param {string} opts.rawContent - Full markdown text
 * @param {'garden' | 'blog'} opts.surface - Target surface (`garden` enforces stricter note heuristics)
 * @param {Array<{label: string, regex: RegExp}>} [opts.localBlocklist]
 * @returns {{ hardFailures: string[], heuristicFailures: string[] }}
 */
export function scanMarkdownForLeaks({ filePath, rawContent, surface, localBlocklist }) {
  const { data: fm } = parseFrontmatter(rawContent);
  const blocklist = localBlocklist ?? loadLocalBlocklist();
  const hardFailures = [];
  const heuristicFailures = [];

  const fileBase = path.basename(filePath, '.md');
  const titleText = `${fileBase} ${fm.title ?? ''}`;

  // Check local blocklist against filename/title first (redacting matched text in output so CI logs stay clean)
  for (const rule of blocklist) {
    if (rule.regex.test(titleText)) {
      hardFailures.push(`${filePath}: title/filename matched ${rule.label}`);
    }
  }

  if (surface === 'garden' && fm.privacy_reviewed !== true) {
    for (const rule of SENSITIVE_TITLE_RULES) {
      if (rule.regex.test(titleText)) {
        heuristicFailures.push(`${filePath}: title matched "${rule.label}"`);
      }
    }
  }

  const lines = rawContent.split(/\r?\n/);
  let inFence = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*(?:```|~~~)/.test(line)) {
      inFence = !inFence;
    }

    for (const rule of HARD_CONTENT_RULES) {
      if (rule.regex.test(line)) {
        hardFailures.push(`${filePath}:${i + 1}: matched ${rule.label}`);
      }
    }

    for (const rule of blocklist) {
      if (rule.regex.test(line)) {
        hardFailures.push(`${filePath}:${i + 1}: matched ${rule.label}`);
      }
    }

    if (surface === 'garden' && fm.privacy_reviewed !== true && !inFence) {
      for (const rule of HEURISTIC_CONTENT_RULES) {
        if (rule.regex.test(line)) {
          heuristicFailures.push(`${filePath}:${i + 1}: matched ${rule.label}`);
        }
      }
    }
  }

  return { hardFailures, heuristicFailures };
}
