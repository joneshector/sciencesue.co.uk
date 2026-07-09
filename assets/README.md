# assets/

Design system and behaviour for the **static site** (repo root). No build step — everything ships as-is.

## css/ — load order matters

```
tokens.css      design tokens (colours, fonts, spacing, shadows, motion)
base.css        reset, typography, layout, buttons, header/footer, reveal utilities
components.css  cards, stars, carousels, review list, forms, CTA panel
pages.css       hero, page headers, about/contact layouts
```

Re-theme the entire site by editing `tokens.css` only. Keep `app/src/styles/` in sync (copies — see `docs/CONTENT.md`).

## js/ — ES modules

```
data/
  reviews.data.js   all 36 testimonials (VERBATIM — presentation fields only may change)
  site.data.js      nav, services, contact info, gallery config
main.js             global: sticky header, mobile nav, scroll-reveal, footer year
carousel.js         image carousel factory (used by home.js)
spotlight.js        featured-testimonial carousel factory (used by reviews.js)
home.js             home page entry
reviews.js          reviews page entry (spotlight + filterable list)
contact.js          contact form (mailto: mock — upgrade path in docs/SCALING.md)
```

Pages load `main.js` plus at most one page module via `<script type="module">`.

## Conventions

- BEM-ish class names (`block__element--modifier`), design-token variables only (no raw hex in components/pages).
- Review/user content is always injected with `textContent`, never `innerHTML`.
- Animations must respect `prefers-reduced-motion` (handled centrally in base.css; JS modules skip auto-advance timers).
