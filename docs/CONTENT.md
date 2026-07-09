# Content Guide

How to change what the site says — safely.

## Golden rules

1. **Never edit review content.** Names, roles, ratings and text in `reviews.data.js` are client-supplied and verbatim (source material preserved in `docs/source-reviews.txt`). You may only change presentation fields: `id`, `group`, `featured`.
2. **Existing copy is client-approved.** Don't reword bio/philosophy/approach/services/contact text without explicit client sign-off. Propose changes in `SUGGESTIONS.md` instead.
3. **Update both copies.** Content lives in two synced locations until the React app becomes production:
   - Static site: `assets/js/data/reviews.data.js`, `assets/js/data/site.data.js`
   - React app: `app/src/data/` (same files; `site.data.js` differs only in using root-absolute image paths and router paths)

## Common tasks

### Change which testimonials are featured in the spotlight

Set `featured: true/false` on entries in `reviews.data.js`. Presentation-only — allowed without sign-off. Keep 6–10 featured, mixed across reviewer types.

### Add a review (after client approval)

```js
{
  id: 'unique-slug',
  name: 'Attribution exactly as supplied',
  role: 'Parent',            // shown as the role label
  rating: 5,
  featured: false,
  group: 'parents',          // 'school' | 'teachers' | 'parents' | 'students'
  text: `Review text exactly as supplied.`,
},
```

Filters and counts update automatically.

### Update contact details / hours / services

Edit `site.data.js` → `contactInfo`, `services`, `site.email`, `site.phone`. Note: the phone number `+44 (0) 123 456 7890` is a placeholder — replace when the real number is confirmed (also in the four static pages' footers and `tel:` links).

### Swap or add gallery photos

Drop files into `images/` (and `app/public/images/`), then adjust `galleryImages` in `site.data.js`. Keep roughly 4:3–3:4 aspect ratios; the carousel crops to 4:3 with `object-position: top`.

### Change colours/fonts

`assets/css/tokens.css` (and its copy `app/src/styles/tokens.css`). Nothing else.

## Where fixed copy lives (static site)

Copy that isn't data-driven sits directly in the four HTML files (hero, section titles, page ledes, about/philosophy text) and in the corresponding `app/src/pages/*.jsx`. Search for the sentence you need to change and update both implementations.
