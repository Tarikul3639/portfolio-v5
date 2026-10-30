# Tarikul Islam — Portfolio

Personal portfolio built with the existing Next.js App Router, TypeScript, Tailwind CSS, and shadcn theme setup.

## Routes

- `/` — introduction and selected work
- `/projects` — project index
- `/projects/[slug]` — static project pages
- `/services` — development services grounded in the project record
- `/about` — introduction and approach
- `/contact` — verified public contact links

Project content is maintained in `data/projects.ts`. Paired client/server repositories are represented as one project. The site does not use an API or Redux store because its current content is static.

## Fonts and design tokens

Noto Sans and Noto Mono are loaded locally with `next/font/local`. The editorial display role uses the system Georgia stack. Tailwind CSS 4 utilities provide normal component and layout styling; `app/globals.css` is kept to the starter's Tailwind/shadcn setup, base layer, and theme tokens. See [DESIGN.md](./DESIGN.md) for the typography scale, palette, and image source details. Noto fonts are distributed under the SIL Open Font License; the notice is included in `app/fonts/`.

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
