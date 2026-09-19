# Poo Patrol — poopatrolpet.com

Marketing site for Poo Patrol Pet Waste Removal LLC (Bellefontaine, OH). Astro + Tailwind v4, deployed to GitHub Pages on every push to `main`.

- Brand guide (tokens, mascot, logo files, voice): https://claude.ai/artifact/6Yp1k2NgeZymPmZhnhFbbh
- Original artwork and photos: `brand/` (sign-shop vector PDFs in `brand/source/`, full-size photos in `brand/photos/`)

## Develop

```bash
npm install
npm run dev
```

## Where things live

- `src/lib/site.ts` — phone, address, towns, services, pricing extras, steps, reviews. Edit copy here first.
- `src/components/` — one file per homepage section.
- `src/assets/photos/` — web-sized (≤1600px) copies of `brand/photos/`; Astro's `<Image>` resizes further at build.
- `src/styles/global.css` — brand tokens as Tailwind theme variables (`bg-patrol`, `text-ink`, `font-display`…).

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages. In the repo settings, set **Pages → Source → GitHub Actions** once.

The site is configured for the project URL `https://signshopman.github.io/poo-patrol/`. When the custom domain is attached, change `base` to `'/'` and `site` to `'https://www.poopatrolpet.com'` in `astro.config.mjs` and add a `public/CNAME` file.

## Quote form

The site is static, so the form composes a text message to 937-441-4132 with the answers filled in (works on phones). To collect quotes in an inbox instead, point the form's `action` at a Formspree or similar endpoint and remove the script in `src/components/Quote.astro`.

## Still to do before launch

- Replace the three sample reviews in `src/lib/site.ts` with real ones from Facebook (with permission).
- Have the owner sign off on `terms.astro` and `privacy.astro` (both marked draft).
- Confirm base plan pricing if it should be published.
