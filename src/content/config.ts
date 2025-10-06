import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Point to existing blog directory (Obsidian vault)
const blog = defineCollection({
  loader: glob({ pattern: '**/index.md', base: '/Users/pauldeng/Documents/paulliwali.github.io/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    authors: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Point to existing docs/slip-box directory (Obsidian vault)
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '/Users/pauldeng/Documents/paulliwali.github.io/docs/slip-box' }),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, notes };
