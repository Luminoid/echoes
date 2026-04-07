# Echoes

A curated collection of timeless quotes from philosophers, writers, artists, scientists, and more — in English and Chinese.

Built with SvelteKit 2, Svelte 5, Tailwind CSS 4, and Vite 6. Deployed as a static site to Cloudflare Pages.

## Features

- 375+ quotes across 16 categories
- Bilingual: English and Chinese (Simplified)
- Light/dark theme with OS preference detection
- Alphabetical sorting by locale, chronological quote ordering
- Randomized featured quotes on each visit
- Fully static — prerendered at build time
- SEO: Open Graph, Twitter Cards, hreflang, canonical URLs, JSON-LD
- Accessible: focus indicators, ARIA labels, keyboard navigation, screen reader support

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  lib/
    components/   # Svelte components (Header, Footer, PersonCard, QuoteBlock, etc.)
    data/         # Quote data by category (16 files) + types + index
    i18n/         # Translation strings (EN/ZH)
  routes/         # SvelteKit pages (home, category, person detail)
static/           # Favicon, robots.txt, _headers
```

## License

CC BY-NC-SA 4.0
