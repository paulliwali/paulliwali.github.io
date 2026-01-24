# Paul's Second Brain - Digital Garden

Personal website built with Astro, featuring a digital garden, Zettelkasten notes, and 3D mind map visualization.

**Live site**: https://paulliwali.github.io

## Quick Reference

```bash
npm run dev          # Start dev server (runs generate:mindmap first)
npm run build        # Production build
npm run preview      # Preview production build
```

## Project Structure

```
├── src/
│   ├── components/      # React components (MindMap3D.tsx)
│   ├── content/         # Astro content config
│   ├── layouts/         # BaseLayout.astro
│   ├── pages/           # Route pages
│   ├── styles/          # global.css (design system)
│   └── utils/           # wiki-resolver.js (wikilink handling)
├── blog/                # Blog posts (Obsidian vault)
├── docs/
│   ├── slip-box/        # Zettelkasten notes
│   │   ├── reference-notes/
│   │   ├── literature-notes/
│   │   ├── permanent-notes/
│   │   └── writing-bin/
│   └── daily-notes/     # Daily journal entries
├── public/              # Static assets, mindmap-data.json
└── scripts/             # generate-mindmap.js
```

## Content System

Content is managed via Obsidian and lives in `blog/` and `docs/` directories.

### Collections (src/content/config.ts)
- **blog**: `blog/*.md` - Blog posts with title, date, tags
- **notes**: `docs/slip-box/**/*.md` - Zettelkasten notes
- **daily-notes**: `docs/daily-notes/**/*.md` - Daily entries

### Wikilinks
Obsidian-style `[[wikilinks]]` are supported via `remark-wiki-link` plugin.
Resolution logic is in `src/utils/wiki-resolver.js`.

## Key Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.astro` | Homepage with recent posts |
| `/garden` | `pages/garden/index.astro` | All blog posts |
| `/garden/[slug]` | `pages/garden/[...slug].astro` | Individual post |
| `/slip-box` | `pages/slip-box/index.astro` | Zettelkasten notes |
| `/explore` | `pages/explore/index.astro` | 3D mind map |
| `/projects` | `pages/projects.astro` | Portfolio |
| `/about` | `pages/about.astro` | About page |

## 3D Mind Map

Interactive visualization built with React Three Fiber.

- **Data generation**: `scripts/generate-mindmap.js` scans docs/ for markdown files and extracts wikilinks
- **Output**: `public/mindmap-data.json`
- **Component**: `src/components/MindMap3D.tsx`
- **Auto-runs**: `npm run dev` and `npm run build` run generation first

Node colors by category:
- Reference notes: sage (`#7b9e89`)
- Literature notes: lavender (`#b8a9c9`)
- Permanent notes: terracotta (`#d4a574`)
- Writing bin: dusty rose (`#c9ada7`)
- Daily notes: steel blue (`#9eb3c2`)

## Design System (src/styles/global.css)

### Colors
```css
--color-bg-primary: #f5f5f0      /* warm off-white */
--color-bg-secondary: #e8e5d8    /* cream */
--color-accent-sage: #7b9e89     /* muted green */
--color-accent-terracotta: #c38370
--color-accent-lavender: #8b8fa8
--color-text-primary: #2d2d2d
--color-text-secondary: #5a5a5a
--color-link: #5b7c6d
```

### Typography
- Headings: Inter
- Body: Georgia / Crimson Pro (serif)
- Code: JetBrains Mono

### Layout
- Max content width: 680px
- Spacing scale: xs (0.5rem) → xl (3rem)

## Deployment

Deploys automatically via GitHub Actions on push to `main`.

Workflow: `.github/workflows/deploy.yml`
- Runs `npm run build`
- Deploys `dist/` to GitHub Pages

## Dependencies

- **astro**: Static site generator
- **@astrojs/react**: React integration for interactive components
- **react-three-fiber** + **drei**: 3D visualization
- **three**: 3D graphics library
- **remark-wiki-link**: Obsidian wikilink support

## Common Tasks

### Adding a blog post
Create `blog/YYYY-MM-DD-title/index.md` with frontmatter:
```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
tags: [tag1, tag2]
---
```

### Adding a note
Create markdown in appropriate `docs/slip-box/` subfolder.
Use `[[wikilinks]]` to link between notes.

### Updating the mind map
Runs automatically on build. To regenerate manually:
```bash
npm run generate:mindmap
```
