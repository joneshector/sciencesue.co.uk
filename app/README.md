# app/ — Extendable React implementation

The **future-facing codebase** for sciencesue.co.uk: same design and content as the static site at the repo root, built with **Vite + React + React Router** so the business can grow into it (service pages, booking, blog, CMS) without a rewrite.

## Run it

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # production bundle → dist/ (static files)
npm run preview   # serve the production build locally
```

## Structure

```
src/
├── main.jsx          entry — router + shared design-system imports
├── App.jsx           routes + layout (add new routes here)
├── components/       reusable UI
│   ├── Header.jsx        sticky nav (links from data)
│   ├── Footer.jsx        footer (links + contact from data)
│   ├── Carousel.jsx      image carousel (Meet Sue gallery)
│   ├── Spotlight.jsx     featured-testimonial carousel
│   ├── ReviewCard.jsx    single testimonial card
│   ├── Stars.jsx         accessible star rating
│   ├── CtaPanel.jsx      call-to-action banner
│   └── PageHeader.jsx    page title banner + document.title
├── pages/            one file per route (Home, About, Reviews, Contact, NotFound)
├── data/             content (copies of /assets/js/data — keep in sync, see docs/CONTENT.md)
└── styles/           design system (copies of /assets/css — keep in sync)
public/
├── favicon.svg
└── images/           gallery photos (copy of /images)
```

## How to extend

**Add a page:** create `src/pages/Thing.jsx`, add a `<Route>` in `App.jsx`, add a nav entry in `src/data/site.data.js`. Done.

**Add a service:** append to `services` in `site.data.js` — the contact form updates automatically. A dedicated service page is a page + route as above.

**Add a review** *(client approval required)*: append to `src/data/reviews.data.js` (and the static-site copy). List, filters and counts update automatically. Never edit existing review content.

**Re-theme:** edit `src/styles/tokens.css` only.

## Content rules

Review data is verbatim client content — presentation fields (`featured`, `group`, `id`) only. All other copy is client-approved; propose changes in `docs/SUGGESTIONS.md`.

## Deployment

`npm run build` produces plain static files in `dist/`. Serve on any static host; for nginx/Droplet setup (including the SPA `try_files` rule) see [`../docs/DEPLOYMENT.md`](../docs/DEPLOYMENT.md).
