import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the project root directory dynamically
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../..');

// Point to existing blog directory (Obsidian vault)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: path.join(projectRoot, 'blog') }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.string().optional(),
    authors: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// PUBLISHABLE SURFACE — the site reads ONLY `blog/` and `garden/`.
// Anything outside those two directories is outside the build by construction.
// `garden/slip-box/` holds curated notes mirrored out of the private vault by hand.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: path.join(projectRoot, 'garden/slip-box') }),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Curated daily notes only — never `second-brain/daily-notes` (private journal).
const dailyNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: path.join(projectRoot, 'garden/daily-notes') }),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, notes, 'daily-notes': dailyNotes };
