# Paul's Second Brain - Digital Garden

Personal website built with Astro, featuring a digital garden, Zettelkasten slip-box notes, and an ambient background knowledge graph.

**Live site**: https://paulliwali.github.io (https://pauldeng.me)

## Quick Reference

```bash
npm run sync:garden:dry  # Preview which Obsidian notes (`publish: true`) would sync
npm run sync:garden      # Sync opted-in Obsidian notes -> garden/ + regenerate graph
npm run guard            # Run privacy & publish-surface gate locally
npm run dev              # Sync garden, regenerate graph, and start dev server
npm run build            # Run guard, regenerate graph, and build production site
npm run preview          # Preview production build
```

## Project Structure

```
├── src/
│   ├── components/      # BackgroundGraph.astro (persistent ambient 2D graph)
│   ├── content/         # Astro content config (enforces publish: true on garden/)
│   ├── layouts/         # BaseLayout.astro (View Transitions + BackgroundGraph)
│   ├── pages/           # Route pages (/, /garden, /slip-box, /projects, /resume, /about)
│   ├── styles/          # global.css (design system)
│   └── utils/           # wiki-resolver.js (wikilink handling across blog/ and garden/)
├── blog/                # Published Garden essays & long-form posts
├── garden/              # Opted-in notes synced out of `second-brain/` via sync-garden.mjs
│   ├── slip-box/        # Zettelkasten notes (permanent/literature/reference/writing-bin/unorganized)
│   └── daily-notes/     # Curated daily notes (requires publish: true + allow_public_journal: true)
├── public/              # Static assets, mindmap-data.json
└── scripts/             # sync-garden.mjs, privacy-rules.mjs, guard-public-surface.mjs, generate-mindmap.js
```

## Content System & Privacy Gate — PUBLISH SURFACE

**The site renders `blog/` and `garden/` ONLY.** Nothing else in this repo is read by the build.

### Multi-Layer Privacy Defense (Deny-by-Default)
The author's live Obsidian vault (`second-brain/`) is `.gitignore`d and never tracked by git. Publishing from `second-brain/` into `garden/` is gated by three independent layers:

1. **Explicit Opt-In Sync (`scripts/sync-garden.mjs`)**:
   - Only notes in `second-brain/slip-box/` with `publish: true` in YAML frontmatter are eligible.
   - Journal entries in `second-brain/daily-notes/` are blocked unless **both** `publish: true` and `allow_public_journal: true` are set.
   - Strips Obsidian `%% ... %%` comments and `<!-- private -->...<!-- /private -->` blocks before writing.
   - Rewrites `[[wikilinks]]` pointing to unpublished/private notes into plain text so private note paths never leak and visitors never hit 404s.
   - Runs `scripts/privacy-rules.mjs` (blocks secrets, SSNs, card numbers, phone/email, compensation/interview/HR keywords, financial/net-worth terms, and any custom terms in local `.privacy-blocklist.txt`).
   - Removes notes from `garden/` if `publish: true` is later removed in Obsidian.
2. **Astro Schema Gate (`src/content/config.ts`)**:
   - `notes` and `daily-notes` collections require `publish: z.literal(true)` (and `allow_public_journal: z.literal(true)` for daily notes), failing compilation if an unvetted file is placed in `garden/`.
3. **CI & Build Guard (`scripts/guard-public-surface.mjs`)**:
   - Runs in CI on every push/PR (`.github/workflows/content-guard.yml`, `.github/workflows/deploy.yml`) and locally on `npm run build`.
   - Fails if any private path (`second-brain/`, `.obsidian/`, `.smart-connections/`, `.privacy-blocklist.txt`, keys, `.env`) is tracked, if collection loaders point outside `blog/` or `garden/`, or if any published markdown fails privacy checks.

### Local Private Blocklist (`.privacy-blocklist.txt`)
Copy `.privacy-blocklist.example.txt` to `.privacy-blocklist.txt` (gitignored and blocked from commits by `guard-public-surface.mjs`) and list employer names, project codenames, home street names, or personal contacts that must never appear on the public site.

### Publishing an Obsidian Note
1. In Obsidian (`second-brain/slip-box/...`), add `publish: true` to the note's YAML frontmatter:
   ```yaml
   ---
   publish: true
   title: "Optional Display Title"
   tags: [topic1, topic2]
   ---
   ```
   *(If a benign book/essay note triggers a heuristic keyword check after you've verified it is 100% safe, add `privacy_reviewed: true` to frontmatter. Hard rules and `.privacy-blocklist.txt` hits can never be overridden.)*
2. Preview & sync:
   ```bash
   npm run sync:garden:dry
   npm run sync:garden
   ```
3. Review `git diff garden/` and commit.

## Ambient Background Knowledge Graph

- **Generator**: `scripts/generate-mindmap.js` scans `blog/` and `garden/`, extracts `[[wikilinks]]`, internal markdown links, and sparse shared-tag bridges, and computes a deterministic 2D force-directed layout into `public/mindmap-data.json`.
- **Component**: `src/components/BackgroundGraph.astro` renders a non-interactive, subtle 2D constellation behind all pages (persisted across client-side navigations via Astro `<ClientRouter />` + `transition:persist`).
- **Active Note Indicator**: When viewing a post or note, a calm vermilion-red dot breathes steadily on that note's node in the graph, and smoothly glides along an arc to the next node when navigating between notes.

## Key Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.astro` | Homepage with recent Garden posts |
| `/garden` | `pages/garden/index.astro` | All Garden posts & tag filter |
| `/garden/[slug]` | `pages/garden/[...slug].astro` | Individual Garden post or curated daily note |
| `/slip-box` | `pages/slip-box/index.astro` | Curated Zettelkasten notes |
| `/slip-box/[slug]` | `pages/slip-box/[...slug].astro` | Individual Slip-Box note |
| `/projects` | `pages/projects.astro` | Portfolio |
| `/resume` | `pages/resume.astro` | HTML & PDF resume |
| `/about` | `pages/about.astro` | About page |
