# sciencesue.co.uk

Professional website for **Sue Dudman Jones ("Science Sue")** — a primary-education science specialist with 35+ years of experience. The site introduces Sue, presents her educational approach, showcases testimonials, and converts interest into enquiries for future tutoring services (individual tutoring, group sessions, exam preparation, online learning).

> This is an informational/presentational site — **no e-commerce or checkout** is included by design.

## Two implementations, one design

| | Where | Purpose |
|---|---|---|
| **Static site** | repo root (`*.html`, `assets/`) | Zero-build deployment on **GitHub Pages** (live at www.sciencesue.co.uk). This is what visitors see today. |
| **React app** | [`app/`](app/) | The **extendable codebase** for the future business — same look and feel, componentised with Vite + React, ready for booking flows, a blog, a CMS, etc. |

Both share the same **design tokens** (`assets/css/tokens.css` ↔ `app/src/styles/tokens.css`) and the same **content data** (`assets/js/data/` ↔ `app/src/data/`), so they stay visually and factually identical.

## Quick start

**Static site** — no build step:

```bash
# any static server, e.g.
python3 -m http.server 8000
# → http://localhost:8000
```

**React app:**

```bash
cd app
npm install
npm run dev      # dev server → http://localhost:5173
npm run build    # production bundle → app/dist/
```

## Repository structure

```
├── index.html / about.html / reviews.html / contact.html   Static pages
├── 404.html, robots.txt, sitemap.xml, CNAME                SEO & hosting files
├── assets/
│   ├── css/        Design system (tokens → base → components → pages)
│   └── js/         Behaviour modules + data/ (reviews & site content)
├── images/         Sue's photo gallery (16 images)
├── app/            Vite + React extendable implementation
└── docs/           Architecture, deployment, scaling & content guides
```

Each directory has its own README. Start with [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Content rules (important)

- **Reviews are sacrosanct.** All 36 testimonials in `assets/js/data/reviews.data.js` are client-supplied and must never be reworded, added to, or removed. Only their presentation may change.
- **Existing copy is client-approved.** Bio, philosophy, approach, services and contact details must keep their wording. Suggested copy improvements belong in [`docs/SUGGESTIONS.md`](docs/SUGGESTIONS.md), not in the code.
- Fixed content counts: **36 reviews, 16 gallery images, 3 approach cards, 4 contact info items, 4 services.**

## Documentation index

| Doc | Covers |
|---|---|
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | How the pieces fit together; design decisions (incl. the reviews pattern) |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | GitHub Pages today; porting to a DigitalOcean Droplet / any host |
| [`docs/SCALING.md`](docs/SCALING.md) | Growth roadmap: CMS for non-technical editing, booking, blog, analytics; admin-panel decision |
| [`docs/CONTENT.md`](docs/CONTENT.md) | How to edit/add content safely (data-driven structure) |
| [`docs/SUGGESTIONS.md`](docs/SUGGESTIONS.md) | Prioritised future enhancements + proposed copy edits for client sign-off |

## License

Code is released under the [MIT License](LICENSE). Site content (text, testimonials, photographs) is **not** MIT-licensed — see the content notice in [LICENSE](LICENSE).
