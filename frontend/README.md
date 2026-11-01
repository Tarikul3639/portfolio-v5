# Tarikul Islam — Portfolio

Personal portfolio built with the existing Next.js App Router, TypeScript, Tailwind CSS, and shadcn theme setup.

## Routes

- English is the default locale and uses unprefixed routes: `/`, `/projects`, `/projects/[slug]`, `/services`, `/about`, `/contact`, and `/business-card`.
- Bengali routes use the `/bn` prefix, for example `/bn`, `/bn/projects`, and `/bn/business-card`.
- The language switcher preserves the equivalent route when available.

Project content is maintained in `data/projects.ts`. Paired client/server repositories are represented as one project. The site does not use an API or Redux store because its current content is static.

## Fonts and design tokens

Noto Sans, Noto Sans Bengali, and Noto Mono are loaded locally with `next/font/local`. Bengali pages use Noto Sans Bengali. The editorial display role uses the system Georgia stack. Tailwind CSS 4 utilities provide normal component and layout styling; `app/globals.css` is kept to the starter's Tailwind/shadcn setup, base layer, and theme tokens. See [DESIGN.md](./DESIGN.md) for the typography scale, palette, and image source details. Noto fonts are distributed under the SIL Open Font License; the notice is included in `app/fonts/`.

Translations are maintained in locale-specific files under `messages/en/` and `messages/bn/`, with shared UI copy in each locale's `common.json`.

## Scroll behavior

Fresh page loads and reloads start at the top of the page. The browser's normal scroll restoration is re-enabled after the page loads, so back and forward navigation can restore its previous position.

## Local development

From this directory:

```bash
pnpm dev
```

Available checks:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

SEO metadata, canonical URLs, `robots.txt`, `sitemap.xml`, JSON-LD, and `public/llms.txt` use the public portfolio domain linked from Tarikul's GitHub profile.
