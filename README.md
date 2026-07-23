# OASIUM Website

Single-page official website for OASIUM, built with Astro and TypeScript.

## Local development

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

## Project structure

- `src/pages/index.astro` — the single-page website and drawer interaction.
- `src/config/site.ts` — release copy and external links.
- `src/styles/global.css` — fixed poster scale tiers and responsive presentation.
- `webimg/` — web-ready official image assets and the Pages `CNAME` file.
- `fonts/` — local Mohave font files.

The 2560×1440 key visual changes only between the fixed scale tiers defined in
`src/styles/global.css`; it does not scale continuously.

## Publishing

Pushes to `main` are built and deployed to GitHub Pages by
`.github/workflows/deploy.yml`. The custom domain remains `oasium.io`.
