# Samiuzzaman Sahil — Portfolio

A personal portfolio for **Samiuzzaman Sahil**, a full-stack developer and Computer Science & Engineering student at Uttara University, Dhaka.

Built with React 18, Vite 5 and Tailwind CSS, with Framer Motion for subtle reveal animations and a keyboard-driven command palette.

## Features

- Responsive layout with a centred editorial column and hatched section dividers
- Dark and light themes that respect the system preference and persist locally
- Command palette (`Ctrl` / `Cmd` + `K`) for jumping to sections, projects and links
- Project cards with custom SVG covers
- Live GitHub repository data with a bundled snapshot fallback
- Resume download, copy-email action and a compact footer
- Reduced-motion support and keyboard-friendly navigation

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deployment

The site deploys to GitHub Pages through `.github/workflows/deploy.yml` on every push to `main`.

When `GITHUB_ACTIONS` is set, Vite builds with a `/portfolio/` base path, so the site is served from
`https://SamiSahil.github.io/portfolio/`.

## Content

All personal copy, projects, stack groups and navigation live in `src/data/content.js`.
GitHub fallback data lives in `src/data/githubSnapshot.js`; update the snapshot when repositories change.

## Assets

- `public/profile.jpg` — portrait
- `public/resume.pdf` — one-page CV
- `public/og.png` — social preview image (1200×630)
- `public/favicon.svg` — site icon
