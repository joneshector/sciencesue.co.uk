# Scaling & Growth Roadmap

How to grow this site into a full tutoring business platform — without a rewrite. Build only what's needed when it's needed; the extension points below already exist.

## Does the site need an admin panel?

**Not yet — and probably not a custom one, ever.** Rationale:

- The content that changes (reviews, services, copy) lives in two small data files. Edits are minutes of work and version-controlled.
- A custom admin panel means authentication, a server, a database, security patching and hosting costs — for one editor. That's disproportionate today.
- **The industry-standard path for non-technical control is a Git-based or headless CMS, not a bespoke panel.** When Sue wants to edit content herself, add **Decap CMS** (free, open source): it provides an `/admin` editing UI in the browser, stores edits as Git commits (works with GitHub Pages), and needs no database. Setup is roughly a day: an `admin/` page + a YAML config mapping the data files to friendly forms.
- If the business later needs bookings, payments and student records, adopt a platform with its own admin (e.g. a headless CMS like Sanity/Strapi, or a tutoring SaaS) rather than building one.

**Decision: no admin panel in this phase; Decap CMS documented as the upgrade path.**

## Non-technical content control (recommended first upgrade)

1. Add Decap CMS (`admin/index.html` + `config.yml`) mapped to `assets/js/data/*.js` (or migrate the data files to YAML/JSON, which Decap handles natively — a 1-hour refactor since all rendering already goes through the data layer).
2. Sue logs in with her GitHub account, edits "Reviews" or "Services" in a form UI, clicks publish → commit → Pages redeploys.

## Real enquiry form (recommended second upgrade)

The form currently opens the visitor's email client (`mailto:`) — the only backend-free option on GitHub Pages. Upgrade options, easiest first:

| Option | Effort | Notes |
|---|---|---|
| **Formspree / Web3Forms** | ~15 min | Change the form `action`; free tier fine for enquiry volume |
| **Netlify Forms** | ~15 min | If hosting moves to Netlify |
| **Self-hosted endpoint** | ~½ day | Small Node/worker on the Droplet emailing via SMTP; full control, no third party |

## Roadmap (prioritised)

| Phase | Item | Outline |
|---|---|---|
| 1 | Real form backend | See above — makes the site convert properly |
| 1 | Analytics | Plausible or GA4 one-liner in the four pages (+ `app/index.html`); privacy-friendly Plausible recommended for a UK education audience |
| 2 | Decap CMS | Non-technical editing (above) |
| 2 | Individual service pages | One page per service (`services/individual-tutoring.html`, …). Data already models services as a list; in the React app it's one route + one data file |
| 3 | Booking/enquiry flow | Start with Calendly/Cal.com embed on a "Book a session" page; replace with a bespoke flow in the React app only if scheduling needs outgrow it |
| 3 | Blog / resources area | Best done in the React app (or by adding Astro/Eleventy content collections); valuable for SEO around "primary science tutoring" queries |
| 4 | Migrate production to `app/` | When interactive features (booking, accounts) arrive, make the React app the deployed site (see DEPLOYMENT.md) and retire the duplicated data/style copies |

## Extension points already in place

- **New review**: append one object to `reviews.data.js` (both copies) — appears in list and filters automatically. (Requires client approval per content rules.)
- **New service**: add to `services` in `site.data.js`; the contact form subjects update automatically.
- **New page (static)**: copy an existing page, keep the header/footer blocks, add to `sitemap.xml` and both navs.
- **New page (app)**: file in `pages/` + route in `App.jsx` + nav entry in data.
- **Re-theme**: edit `tokens.css` only.
- **Performance headroom**: images are lazy-loaded; if Lighthouse scores matter later, add pre-resized WebP variants (a 10-line script with `sharp`) — the `<img>` markup already carries width/height to avoid layout shift.
