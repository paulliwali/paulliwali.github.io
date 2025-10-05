# Paul Deng's Second Brain

A personal knowledge management website built with [Docusaurus 2](https://docusaurus.io/), featuring an interactive mind map visualization of interconnected notes and ideas.

## 🌐 Live Site

The site is hosted on GitHub Pages with a custom domain: [pauldeng.me](https://pauldeng.me/)

## 📚 About

This website serves as my "Second Brain" - a personal knowledge base for documenting things I've learned to prevent forgetting them over time. It includes:

- **Interactive Mind Map**: A dynamic visualization of all notes and their connections on the homepage using ReactFlow and Dagre layout
- **Slip-Box System**: Organized notes following the Zettelkasten method with literature notes, permanent notes, and reference notes
- **Daily Notes**: Chronological journal entries tracking learning and progress
- **Blog**: Long-form articles on topics like productivity, health tracking, and year-in-review posts
- **Mathematical Content**: Support for KaTeX rendering for mathematical formulas

## 🛠️ Tech Stack

- **Framework**: Docusaurus 3.7.0
- **UI Libraries**:
  - ReactFlow 11.11.4 (interactive mind map)
  - @dagrejs/dagre (graph layout algorithm)
- **Rendering**:
  - remark-math & rehype-katex (mathematical notation)
  - Prism (code syntax highlighting)
- **Styling**: Custom CSS with retro theme (Verdana fonts, Classic Blue color scheme)
- **Deployment**: GitHub Actions → GitHub Pages

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) version 18.0 or above
- [npm](https://www.npmjs.com/) package manager (comes with Node.js)

To install Node.js using [Homebrew](https://brew.sh/):

```bash
brew install node
```

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Generate mind map data** (required for homepage):
   ```bash
   npm run generate-mindmap
   ```
   This script scans all markdown files in `/docs` and generates a JSON file with nodes and edges for the interactive mind map.

3. **Start development server**:
   ```bash
   npm start
   ```
   This opens a browser window at `http://localhost:3000`. Most changes are reflected live without restarting the server.

## 🏗️ Build

Generate static content for production:

```bash
npm run build
```

This creates a `build` directory with optimized static files ready for deployment.

To test the production build locally:

```bash
npm run serve
```

## 📦 Deployment

### Automated Deployment (Recommended)

The site uses GitHub Actions for automatic deployment. On every push to `main`:
1. Dependencies are installed
2. Site is built
3. Built files are deployed to the `gh-pages` branch
4. GitHub Pages serves the site at [pauldeng.me](https://pauldeng.me/)

See `.github/workflows/deploy.yml` for the deployment workflow.

### Manual Deployment

Using the Docusaurus deploy command:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

Or with SSH:

```bash
USE_SSH=true npm run deploy
```

## 📁 Project Structure

```
paulliwali.github.io/
├── .github/workflows/     # GitHub Actions CI/CD
│   ├── deploy.yml        # Auto-deploy to GitHub Pages
│   └── test-deploy.yml   # PR build tests
├── blog/                 # Blog posts (MDX files)
├── docs/                 # Main documentation/notes
│   ├── daily-notes/      # Daily journal entries
│   ├── roam/             # Topic-based notes
│   ├── slip-box/         # Zettelkasten notes
│   │   ├── literature-notes/
│   │   ├── permanent-notes/
│   │   ├── reference-notes/
│   │   └── writing-bin/
│   └── templates/        # Note templates (excluded from build)
├── scripts/              # Utility scripts
│   └── generate-mindmap-data.js  # Parses markdown links for mind map
├── src/
│   ├── components/       # React components
│   ├── css/              # Global styles (retro theme)
│   ├── data/             # Generated data files
│   │   └── mindmap-data.json
│   └── pages/            # Custom pages
│       └── index.js      # Interactive mind map homepage
├── static/               # Static assets (images, CNAME)
├── docusaurus.config.js  # Site configuration
├── sidebars.js           # Documentation sidebar
└── package.json          # Dependencies and scripts
```

## 🎨 Features

### Interactive Mind Map
- Homepage displays all notes as an interactive graph
- Nodes are clickable and navigate to corresponding documentation pages
- Auto-layout using Dagre algorithm (left-to-right flow)
- Links between notes are parsed from `[[wiki-style]]` markdown links

### Content Organization
- **Slip-Box Method**: Implements Niklas Luhmann's Zettelkasten system
- **Auto-generated Sidebar**: Navigation structure mirrors folder hierarchy
- **Template System**: Reusable templates for different note types

### Theme
- Custom retro aesthetic with Classic Blue (#005A9C) primary color
- Verdana font stack for nostalgic feel
- Full dark mode support with high contrast

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start local dev server |
| `npm run build` | Build for production |
| `npm run serve` | Serve production build locally |
| `npm run deploy` | Manual deploy to GitHub Pages |
| `npm run generate-mindmap` | Generate mind map data from markdown files |
| `npm run clear` | Clear Docusaurus cache |

## 🐛 Troubleshooting

### Dependencies Issues
If you encounter dependency problems:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Mind Map Not Loading
Ensure mind map data is generated:

```bash
npm run generate-mindmap
```

### Node Version Issues
This project requires Node.js 18+. Use [nvm](https://github.com/nvm-sh/nvm) to manage versions:

```bash
nvm install 18
nvm use 18
```

## 🤝 Contributing

This is a personal website, but suggestions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

Copyright © 2025 Paul Deng. All rights reserved.

## 🔗 Links

- **Live Site**: [pauldeng.me](https://pauldeng.me/)
- **GitHub**: [paulliwali](https://github.com/paulliwali)
- **Docusaurus**: [docusaurus.io](https://docusaurus.io/)
