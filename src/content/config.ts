import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the project root directory dynamically
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../..');

// Normalize Obsidian frontmatter tags (handles null, single string, or string[])
const tagsSchema = z
  .preprocess(
    (val) => (val == null ? [] : Array.isArray(val) ? val.map(String) : [String(val)]),
    z.array(z.string())
  )
  .default([]);

// Blog posts (`blog/`) — rendered under `/garden`
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: path.join(projectRoot, 'blog') }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.string().optional(),
    authors: z.string().optional(),
    tags: tagsSchema,
  }),
});

// PUBLISHABLE SURFACE — the site reads ONLY `blog/` and `garden/`.
// Every note in `garden/` MUST carry `publish: true` (enforced by sync-garden, guard, and schema).
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: path.join(projectRoot, 'garden/slip-box') }),
  schema: z.object({
    publish: z.literal(true),
    privacy_reviewed: z.boolean().optional(),
    title: z.string().optional(),
    date: z.string().optional(),
    source: z.string().optional(),
    author: z.string().optional(),
    tags: tagsSchema,
  }),
});

// Curated daily notes only — requires BOTH `publish: true` and `allow_public_journal: true`.
const dailyNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: path.join(projectRoot, 'garden/daily-notes') }),
  schema: z.object({
    publish: z.literal(true),
    allow_public_journal: z.literal(true),
    privacy_reviewed: z.boolean().optional(),
    title: z.string().optional(),
    tags: tagsSchema,
  }),
});

export const collections = { blog, notes, 'daily-notes': dailyNotes };
