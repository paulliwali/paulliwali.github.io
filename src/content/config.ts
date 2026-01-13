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
    authors: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Point to existing docs/slip-box directory (Obsidian vault)
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: path.join(projectRoot, 'docs/slip-box') }),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Point to existing docs/daily-notes directory (Obsidian daily notes)
const dailyNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: path.join(projectRoot, 'docs/daily-notes') }),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, notes, 'daily-notes': dailyNotes };
