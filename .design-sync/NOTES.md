# design-sync notes: van-portfolio

## What this is
- The repo is a static HTML/SCSS portfolio, not a component library. On 2026-11-11 the user chose to sync it to Claude Design by writing thin React wrappers that reproduce the pages' existing markup and classes. They live in `.design-sync/kit/` (package `van-portfolio-ds`, global `window.VanPortfolioDS`). The site's own HTML/SCSS/JS files were not changed.
- The kit's `build.mjs` compiles the repo's `style.scss` with the repo's own `sass` into `kit/dist/style.css`, prefixed with the same remote @imports the HTML pages `<link>`: Google Fonts (Holtwood One SC, Roboto, Sanchez), Font Awesome 6.6.0 and animate.css 4.1.1, all from CDNs. `cfg.cssEntry` points there.

## Build
- `cd .design-sync/kit && npm ci && npm run build`, then from the repo root:
  `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules .design-sync/kit/node_modules --entry ./.design-sync/kit/dist/index.js --out ./ds-bundle`
- Playwright/chromium is installed only in `.ds-sync/node_modules` (gitignored), so re-install it there on a fresh clone.
- When a markup pattern changes in the site's HTML, update the matching `kit/src/<Name>.tsx` by hand. Nothing keeps the two in sync automatically.

## Preview harness quirks (fixed via config)
- The global `section { grid-column: 2/6; grid-row: 2/3 }` rule (≥768px) squeezes the card grid, because the harness cells are `<section>`s. All components therefore use `cardMode: "single"` with a `primaryStory` and a 1200px-wide viewport.
- Fonts come only from `main { font-family: Roboto }` and the harness body is white. `cfg.provider` = `PageMain` with an inline dark background `#1a1b1e`. That background is for previews only; real designs get it from `body` in `styles.css`.
- SiteHeader's condensed (`header.scrolled`) state is `position: fixed` and escapes cards (`[GRID_OVERFLOW]`), so it has no story. The prop is documented instead.
- Preview images are imported from `../../images/*` and inlined as data URLs by the preview loader. `_preview/HeroBanner.js` and the project previews are several hundred KB because of this.

## Known render warns
- `[FONT_REMOTE] "Calibri"`: Calibri is only a fallback in the site's font stacks, and the brand fonts load from the Google Fonts @import. Expected.

## Re-sync risks
- The kit wrappers duplicate markup from `index.html`, `about.html` and `projects.html`. If those pages change structure or class names, the wrappers go stale silently. Diff them on every re-sync.
- Fonts, icons and animate.css load from CDNs at runtime (no font files ship). If a CDN URL changes or breaks, the cards fall back to system fonts and icons disappear.
- `cfg.runtimeFontPrefixes` suppresses font checks for those families. That only holds while the remote @import stays in `kit/build.mjs`.
- The `SkillBar` % labels have an animation-delayed fade-in (`delayShow` 1.8s), so immediate screenshots don't show them. This was verified with a delayed capture, not by the standard capture.
