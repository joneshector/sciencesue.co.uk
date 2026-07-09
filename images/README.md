# images/

Sue's photo gallery — exactly **16 images** (`sue_image_1.jpeg` … `sue_image_16.jpeg`), fixed by the client brief. Do not add or remove without client sign-off.

- Used by the "Meet Sue" carousel (`assets/js/data/site.data.js#galleryImages`) and the About profile card (`sue_image_1.jpeg`).
- A copy lives in `app/public/images/` for the React app — keep the two folders in sync.
- Images are lazy-loaded after the first slide; markup carries width/height to prevent layout shift.
- Future optimisation (see `docs/SUGGESTIONS.md`): generate resized WebP variants with `sharp` and add `srcset`.
