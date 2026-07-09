# Suggestions & Proposed Improvements

Concrete, prioritised recommendations beyond the current scope. Items marked **[client sign-off]** touch approved content and must not be implemented without approval.

## Copy edits proposed [client sign-off]

Per the content rules, existing wording was preserved verbatim — including lines a refined site would normally rephrase:

1. **Hero title** — "Welcome to Science Sue Homepage" reads like a placeholder. Suggest: "Inspiring young scientists for over 35 years" (keeps the existing subtitle "Inspiring Educational Excellence" as-is, or swaps roles with it).
2. **Reviews page title** — "What Our Students Say" undersells the breadth; reviews also come from a headteacher, teachers and parents. Suggest: "What Families, Colleagues and Students Say".
3. **Placeholder phone number** — `+44 (0) 123 456 7890` is clearly a placeholder; replace with the real number before launch (locations listed in docs/CONTENT.md).
4. **Hours use 12-hour US-style times** ("9:00 AM") — UK convention would be "9:00am" or "09:00".
5. Some testimonials are birthday messages; consider (with the authors' blessing) whether all 36 should appear on a commercial site, or whether the `featured` set should carry the selling weight. Presentation already mitigates this (spotlight first).

## Feature roadmap (priority order)

1. **Form backend** (Formspree/Web3Forms or endpoint on the Droplet) — the single highest-value change; mailto: depends on the visitor having a mail client configured. (~15 min–½ day)
2. **Analytics** — Plausible (privacy-friendly, no cookie banner needed) or GA4. (~1 h)
3. **Decap CMS** — browser-based content editing for Sue without a developer. (~1 day; see SCALING.md)
4. **Individual service pages** — one page per service with tailored copy + FAQ schema; strong SEO play for "primary science tutor" queries. (~1–2 days) [client sign-off for new copy]
5. **Booking** — Calendly/Cal.com embed first; bespoke flow in the React app later. (~½ day for embed)
6. **Image pipeline** — pre-resized WebP/AVIF variants + `srcset` (script with `sharp`); current JPEGs total ~2.7 MB across the gallery. (~½ day)
7. **Blog/resources** — science-at-home activities, exam tips; the biggest long-term SEO lever. (ongoing) [client sign-off]
8. **Testimonial submission flow** — a small form (with moderation) so new reviews arrive pre-formatted for the data file. (~1 day)
9. **CI checks** — GitHub Action running HTML validation + link checking + `npm run build` on PRs. (~2 h)
10. **Structured-data expansion** — `Service` schema per service page; keep avoiding self-serving `AggregateRating`. (~1 h)

## Licensing decision [client sign-off]

Code is currently MIT (permissive, standard for agency handover). If Sue prefers the code proprietary, swap LICENSE for "All rights reserved" — content is already all-rights-reserved either way.
