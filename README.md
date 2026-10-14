# advay's Blog

A personal blog built with [Astro](https://astro.build). Static HTML output, markdown
content, live search, and a warm eye-friendly light/dark theme.

Based on the **Ember** Astro theme (MIT licensed, © 2026 hongye) — see `LICENSE`.

## Features

- One config file (`src/config.ts`) and one content directory (`content/`)
- Markdown posts & pages — one folder per post, images bundled automatically
- Client-side full-text search
- Eye-friendly light/dark mode (follows your system, toggle in the top-right)
- Post list grouped by year, tag archive pages, RSS feed, sitemap, SEO/social previews
- Self-hosted fonts, no third-party requests

## Quick start

```sh
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:4321).

## Make it yours

1. **Settings** — edit `src/config.ts`: brand, title, site URL, language, taglines,
   nav links, social links.
2. **Content** — everything you write lives in `content/`:

   ```
   content/
   ├── _templates/   ← starter markdown files
   ├── posts/        ← blog posts (one folder each, with index.md)
   └── pages/        ← static pages (about, resources, friends, ...)
   ```

3. **Write a post** — create `content/posts/<slug>/index.md` with frontmatter:

   ```md
   ---
   title: My post title
   description: tldr; one-line summary
   date: 2026-10-13
   tags: [notes]
   draft: false
   ---
   ```

   Set `draft: true` while writing — drafts are not published.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the built site locally |
| `npm run check` | Type-check |
| `npm run lint` | Lint |
| `npm run assets` | Regenerate `public/og-cover.png` and `public/favicon.svg` from `src/config.ts` |

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**
   and pick this repository.
3. Use these build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare will give you a `https://<project-name>.pages.dev` URL —
   update `url` in `src/config.ts` to match, then commit.

## License

MIT — see `LICENSE`. The original theme copyright notice is retained as required
by the license.
