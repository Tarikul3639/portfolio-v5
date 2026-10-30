# Portfolio design system

## Direction

Editorial and restrained: warm paper tones in light mode, deep charcoal in dark mode, with a small muted green accent. Hairline separators, clipped-corner calls to action, an asymmetric project rhythm, and restrained hover transitions provide structure without turning each section into a card.

## Type

- **Noto Sans** (`--font-sans`, self-hosted files): navigation, body copy, project details, and interface labels. Regular and bold weights are bundled with the project so production builds do not need Google Fonts access.
- **Georgia** (`--font-editorial`): display and section headings, project titles, and selected italic emphasis. It is a system stack, so there is no extra network or font payload.
- **Noto Mono** (`--font-mono`, self-hosted file): eyebrow labels, technical metadata, dates, and technology lists.

The working scale is fluid: display 3.2–6.8rem; page title 3–6.3rem; section title 2.5–4rem; card title 1.55–2.1rem; body 0.84–1.12rem; metadata 0.57–0.7rem. Long-form text stays in the sans role with relaxed line height. Noto font files and their SIL Open Font License notice are included under `app/fonts/` and loaded with `next/font/local`, with no build-time network requests.

## Theme and motion

Theme colors use the existing shadcn semantic token pattern and are adjusted centrally in `app/globals.css`. Tailwind utilities carry component styling; the global stylesheet retains only the starter framework setup, base defaults, and color tokens. `next-themes` applies the selected class before paint and stores the preference; system preference is used until a choice is made. Motion uses Tailwind transitions and transforms.

## Portrait asset

The homepage and About page use an optimized WebP copy at `public/images/profile/tarikul-islam.webp`, resized to 1120 × 1488 and saved at quality 88. It comes from the supplied `public/profile/1.jpg`; the source remains unchanged. The homepage requests priority loading because it is the likely largest content element. Other supplied photos were reviewed and kept out of the layout because their event backdrop does not fit the portrait placement. Project cards use abstract CSS typography compositions rather than pretending to show product screenshots; repository screenshots were not accessible during implementation.
