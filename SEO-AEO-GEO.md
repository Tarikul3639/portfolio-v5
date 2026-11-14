# SEO, AEO, and GEO implementation notes

This document describes the search and AI-discovery setup for the Tarikul Islam portfolio. Here, **GEO** means Generative Engine Optimization: making the site's identity, services, and project information easy for answer engines and AI systems to interpret. It does not refer to geographic targeting alone.

## Goals

- Help search crawlers discover the English and Bengali versions of public pages.
- Describe the site owner and portfolio consistently using visible content and structured data.
- Give answer engines concise, factual explanations of the developer's skills, services, and projects.
- Keep technical metadata aligned with the content that visitors can actually read.

Structured data and AI-readable files improve clarity and machine readability. They do not guarantee rankings, rich results, inclusion in an AI answer, or citations by a particular platform.

## Technical SEO

The Next.js App Router application is in `frontend/`.

- Page metadata is generated from localized translation resources.
- Canonical URLs identify the preferred URL for each locale.
- `hreflang` alternates connect English routes with their Bengali equivalents.
- Open Graph and Twitter metadata provide page-specific sharing titles, descriptions, and images.
- `frontend/app/robots.ts` publishes crawler rules and the sitemap location.
- `frontend/app/sitemap.ts` includes both locales and all project detail routes.

## Structured data

JSON-LD is emitted from server-rendered route code and serialized through `frontend/lib/seo/json-ld.ts`, which escapes less-than characters before placing the JSON inside a script element.

| Schema type | Where it appears | Purpose |
| --- | --- | --- |
| `Person` | Every localized route | Identifies Tarikul Islam, his professional role, public profiles, and areas of expertise. |
| `WebSite` | Every localized route | Describes the portfolio website, its language versions, and publisher. |
| `ProfilePage` | Home page | Identifies the homepage as Tarikul Islam's profile and connects it to the canonical `Person` entity. |
| `FAQPage` | Home page | Mirrors the six visible questions and answers from the active locale. |
| `SoftwareApplication` | Each project detail page | Describes the project, its category, key features, author, and public references. |
| `BreadcrumbList` | Each project detail page | Expresses the Home → Projects → Project hierarchy. |

Structured data should always describe content that is visible on the corresponding page. Keep FAQ schema synchronized with the rendered FAQ component and translation files.

## Answer-engine and generative-engine content

The home page uses an explicit identity statement and a concise description of the work: full-stack web applications, backend APIs, cloud integrations, and custom Model Context Protocol (MCP) servers.

The visible FAQ answers common discovery questions:

- What can be built as a full-stack developer?
- Which technologies are used?
- What kinds of projects have been built?
- Which services are available?
- How does collaboration work?
- How can someone discuss a project?

Project detail pages contain a summary, a fuller description, role, technology stack, key capabilities, and source/demo links. Keep those fields factual and consistent between the visible page, metadata, and structured data.

## AI-readable resources

The following files are served from `frontend/public/`:

- `llms.txt`: a concise site index with key pages, services, project summaries, technologies, and public contact/profile links.
- `llms-full.txt`: expanded profile, project, FAQ, and implementation information.

These files are supplementary discovery resources. The public pages remain the canonical source of information and should not depend on an AI crawler reading these files.

## Updating content safely

When adding or changing a project:

1. Update its canonical project record in `frontend/features/projects/data/projects.ts`.
2. Update the English and Bengali summaries, descriptions, categories, roles, and highlights in `frontend/messages/en/projects.json` and `frontend/messages/bn/projects.json`.
3. Update featured-project copy and visible FAQs in the matching locale message files when the home page changes.
4. Keep `frontend/public/llms.txt` and `frontend/public/llms-full.txt` aligned with the published information.
5. Confirm that the project has a valid slug, a useful summary, a project image when available, and working public repository/demo links.

Do not add unsupported claims, client names, performance metrics, certifications, or rankings just to target keywords. Prefer clear descriptions of real work and concrete capabilities.

## Validation

Run the application checks from the frontend directory:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

After deployment, inspect:

- `https://tarikul-islam.me/robots.txt`
- `https://tarikul-islam.me/sitemap.xml`
- `https://tarikul-islam.me/llms.txt`
- `https://tarikul-islam.me/llms-full.txt`

Also test representative English and Bengali pages, including a project detail page, and verify that canonical URLs, language alternates, Open Graph metadata, and JSON-LD match the page content.