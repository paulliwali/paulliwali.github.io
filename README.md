# Paul's Second Brain - Digital Garden

A minimalist, text-forward personal website built with Astro, featuring a digital garden of thoughts, ideas, and learnings.

## Features

- **Digital Garden (Blog)**: Chronological collection of writings and learnings
- **Slip-Box Notes**: Zettelkasten-style note organization with backlinks
- **3D Mind Map**: Interactive visualization of knowledge connections
- **Projects Showcase**: Portfolio of web and iOS applications
- **Minimalist Design**: Muted color palette with focus on readability

## Tech Stack

- **Astro 5**: Static site generator with zero JS by default
- **React**: Only used for interactive components (3D mind map)
- **Three.js & React Three Fiber**: 3D visualization
- **Obsidian**: Content editing (reads directly from existing vault)

## Design System

### Colors
- Primary Background: `#f5f5f0` (warm off-white)
- Accent Sage: `#7b9e89` (muted green)
- Accent Terracotta: `#c38370` (dusty terracotta)
- Accent Lavender: `#8b8fa8` (soft lavender)

### Typography
- Headings: Inter
- Body: Crimson Pro (serif for readability)
- Code: JetBrains Mono

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Structure

Content is managed in the parent directory's Obsidian vault:

- **Blog posts**: `../blog/` - Each post has its own folder with `index.md`
- **Notes**: `../docs/slip-box/` - Organized into reference-notes, literature-notes, and permanent-notes

## Deployment

Deploys automatically to GitHub Pages via GitHub Actions when pushing to main branch.

## License

Content and code © Paul Deng
