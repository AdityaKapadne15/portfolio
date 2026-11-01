# Aditya Kapadne — Portfolio archive

A responsive, single-page React portfolio with a dark indigo visual system and a fictional post-AI-takeover archive aesthetic. The theme is decorative: the site does not track visitors or display live world data. There is no profile photo.

## Tech stack

- React 19
- TypeScript
- Vite
- Three.js with Natural Earth country boundaries
- CSS custom properties and responsive styles

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy to GitHub Pages

This repository is configured as a GitHub Pages project site at
`https://adityakapadne15.github.io/portfolio/`. Vite and the public asset paths
use the `/portfolio/` base path, and the GitHub Actions workflow builds and
deploys the site whenever changes are pushed to `main`.

1. Push or merge the changes to the `main` branch.
2. In GitHub, open **Settings → Pages** and set **Build and deployment → Source**
   to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to
   complete. The site will then be available at the URL above.

You can also run the workflow manually from **Actions → Deploy portfolio to
GitHub Pages → Run workflow**.

## Project structure

```text
src/
├── components/   # Shared navigation, headings, footer, and project card
├── data/         # Typed portfolio content and asset paths
├── sections/     # Page sections
└── styles/       # Theme tokens and responsive global styles
public/assets/    # Resume, favicon, project previews, and certificates
assets/icons/     # Existing technology icons bundled into the skills lanes
```

Update portfolio details and links in `src/data/portfolio.ts`. The page uses native anchor navigation, a button-controlled mobile menu, a persistent dark/light slider, a horizontal career timeline, animated skill-icon lanes, and a keyboard-operable certificate viewer. The resume button links to `Aditya_Kapadne_Lead_Software_Engineer.pdf`. The single interactive globe uses local Natural Earth geography; drag to rotate, scroll to zoom, or pause its slow rotation.

## Appearance

Use the theme button in the header to switch between the default dark archive palette and a light indigo palette. The selection is saved in local storage. The hero globe keeps its dark map treatment in both modes for contrast. The same Three.js globe expands into the archive-signal illustration while scrolling. Country shapes and borders come from the packaged Natural Earth 1:110m dataset; the visualization is illustrative, not live telemetry. Subtle parallax and section reveals add depth across the page, and decorative motion respects `prefers-reduced-motion`. All portfolio claims and project links should be checked before publishing.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the information architecture, wireframes, palette rationale, and migration notes.
