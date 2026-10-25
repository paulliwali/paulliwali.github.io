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
├── blog/                # Blog posts (long-form surface)
├── garden/              # Curated publishable notes, mirrored OUT of the private vault
│   ├── slip-box/        # Zettelkasten notes (reference/literature/permanent/writing-bin)
│   └── daily-notes/     # Curated daily notes only
├── public/              # Static assets, mindmap-data.json
└── scripts/             # generate-mindmap.js, guard-public-surface.mjs
```

## Content System — PUBLISH SURFACE

**The site renders `blog/` and `garden/` ONLY.** Nothing else in this repo is read by
the build, by design.

### Collections (src/content/config.ts)
- **blog**: `blog/*.md` — Blog posts with title, date, tags
- **notes**: `garden/slip-box/**/*.md` — curated Zettelkasten notes
- **daily-notes**: `garden/daily-notes/**/*.md` — curated daily notes

Anything that lands in those two directories is public the moment it is pushed.

### The private vault (NEVER publish)
The author's live Obsidian vault is `second-brain/` — 1,100+ notes: a daily journal
back to 2020, financial plans, a credit-card/churning tracker, wardrobe notes with body
measurements. It is `.gitignore`d and must never be tracked, rendered, or copied into
`blog/` / `garden/` wholesale. It also syncs from a phone (GitSync) which bypasses local
git hooks — which is why `scripts/guard-public-surface.mjs` exists, runs in CI on every
push and PR, and is a step of the deploy workflow. Run it locally with `npm run guard`
(it is also the first step of `npm run build`).

To publish a note: copy that one note into `garden/`, strip anything private (amounts,
account/card details, health, third parties, locations, dates that matter), then commit.

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

- **Data generation**: `scripts/generate-mindmap.js` scans `garden/` for markdown files and extracts wikilinks
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
- Runs `scripts/guard-public-surface.mjs` — a failing guard blocks the deploy
- Runs `npm run build`
- Deploys `dist/` to GitHub Pages

The custom domain https://pauldeng.me is served from the `gh-pages` branch.
Live journal/finance/wardrobe content must never appear in `dist/` — if it does,
the guard is broken: fix the guard before the next push.

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
Copy the note out of the private vault into the matching `garden/slip-box/` subfolder,
redact anything private, then commit. Use `[[wikilinks]]` to link between notes.
Never point a collection loader at `second-brain/` or `docs/` — the guard fails the build.

### Updating the mind map
Runs automatically on build. To regenerate manually:
```bash
npm run generate:mindmap
```
