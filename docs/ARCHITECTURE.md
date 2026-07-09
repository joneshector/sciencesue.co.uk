# Architecture

## Overview

The repository intentionally contains **two implementations of the same design**:

```
                ┌───────────────────────────┐
                │   Design tokens (CSS)     │  one visual language
                │   Content data (JS)       │  one source of content truth
                └────────────┬──────────────┘
              ┌──────────────┴──────────────┐
   ┌──────────▼──────────┐       ┌──────────▼──────────┐
   │  Static site (root) │       │  React app (app/)   │
   │  HTML + CSS + ESM   │       │  Vite + React       │
   │  → GitHub Pages     │       │  → future business  │
   └─────────────────────┘       └─────────────────────┘
```

The **static site** is the production deploy: zero dependencies, zero build step, instant to host anywhere. The **React app** is the extendable codebase the business grows into — same tokens, same data, same class names, so it renders identically.

## Static site (repo root)

### CSS — layered design system

Loaded in cascade order; each layer only depends on the ones above it:

| File | Layer |
|---|---|
| `assets/css/tokens.css` | Design tokens: every colour, font, radius, shadow, duration. **Re-theme the site by editing this one file.** |
| `assets/css/base.css` | Reset, typography, layout primitives, buttons, header/footer, scroll-reveal utilities, reduced-motion handling |
| `assets/css/components.css` | Reusable widgets: cards, star ratings, carousels, review list, forms, CTA panel |
| `assets/css/pages.css` | Page-specific sections: hero, page headers, about/contact layouts |

### JavaScript — ES modules, no framework

| File | Role |
|---|---|
| `assets/js/data/reviews.data.js` | All 36 testimonials (verbatim — see CONTENT.md) |
| `assets/js/data/site.data.js` | Site config, navigation, services, contact info, gallery list |
| `assets/js/main.js` | Global: sticky header, mobile nav, scroll-reveal, footer year |
| `assets/js/carousel.js` | Generic sliding image carousel (exported factory) |
| `assets/js/spotlight.js` | Featured-testimonial cross-fade carousel (exported factory) |
| `assets/js/home.js` / `reviews.js` / `contact.js` | Per-page entry modules |

### HTML

Four pages (`index`, `about`, `reviews`, `contact`) plus `404.html`. Header and footer markup is **duplicated per page** — a deliberate trade-off: with no build step, server-side includes aren't available, and 4 pages is below the threshold where a templating layer pays for itself. If the page count grows past ~6, move to the React app (or add Eleventy) instead of adding a homegrown include system.

## React app (`app/`)

```
app/src/
├── main.jsx            entry — mounts router + imports shared styles
├── App.jsx             routes + layout (Header/main/Footer)
├── components/         Header, Footer, Carousel, Spotlight, Stars,
│                       ReviewCard, CtaPanel, PageHeader
├── pages/              Home, About, Reviews, Contact, NotFound
├── data/               reviews.data.js + site.data.js (copies — see below)
└── styles/             tokens/base/components/pages.css (copies)
```

Adding a page = one file in `pages/`, one route in `App.jsx`, one entry in `site.data.js#navigation`.

### Why copies of data/styles rather than imports?

The static site must work with no build step, and the app must be self-contained (installable/deployable on its own). A shared npm package or build-time sync script is the right move **once the static site is retired** — until then the duplication is two small files, flagged in CONTENT.md so they're updated together.

## Key design decisions

**Reviews presentation** — the industry-standard testimonial pattern for services/education sites is a *featured spotlight carousel + complete browsable list*:

- A rotating spotlight of ~9 standout quotes gives immediate social proof without overwhelming the visitor.
- The complete list (all 36, filterable by School Leaders / Teachers / Parents / Students) sits below in a masonry column layout, preserving every review verbatim.
- This was chosen over "long list only" (poor first impression, huge scroll) and "carousel only" (hides content, bad for SEO and trust). Filtering by reviewer type is the standard affordance when testimonials come from distinct audiences.

**Multi-page over single-page** — the previous mock was one 1,100-line HTML file with hash navigation. Separate pages give clean URLs, per-page titles/descriptions/canonicals, better crawlability, and simpler maintenance.

**Data-driven content** — reviews, services, contact info, navigation and the gallery are data, not markup. Layout code never needs touching for a content change.

**Animation policy** — animations are opt-in per element (`.reveal`, `.reveal-stagger`), driven by IntersectionObserver, and fully disabled under `prefers-reduced-motion`. Durations/easings are tokens.

## SEO & accessibility

- Semantic landmarks (`header/nav/main/footer`), one `h1` per page, ordered headings.
- Per-page `<title>`, meta description, canonical URL, Open Graph tags.
- JSON-LD: `Person` + `WebSite` (home), `AboutPage`, `ContactPage`. Review markup was intentionally **not** emitted as `Review`/`AggregateRating` schema: Google treats self-serving review markup (reviews about yourself on your own site) as ineligible for rich results.
- `sitemap.xml` + `robots.txt` (the `app/` folder is excluded from crawling).
- Skip link, visible focus rings, `aria-current` nav state, accessible carousel controls, alt text, keyboard operability, WCAG-AA contrast on text colours.
