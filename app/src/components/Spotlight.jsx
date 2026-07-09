/**
 * Spotlight — featured-testimonial carousel (cross-fade).
 * Standard services-site pattern: standout quotes rotate here while the
 * complete review list is rendered below (see pages/Reviews.jsx).
 * Review content is rendered verbatim from data — presentation only.
 */
import { useEffect, useState } from 'react';
import Stars from './Stars.jsx';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Spotlight({ items, autoAdvanceMs = 8000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  const goTo = (i) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), autoAdvanceMs);
    return () => clearInterval(t);
  }, [paused, count, autoAdvanceMs]);

  return (
    <div
      className="spotlight"
      aria-roledescription="carousel"
      aria-label="Featured testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button className="carousel__btn carousel__btn--prev" aria-label="Previous testimonial" onClick={() => goTo(index - 1)}>
        &#10094;
      </button>
      <div className="spotlight__stage" aria-live="polite">
        {items.map((review, i) => (
          <figure
            key={review.id}
            className={`spotlight__card${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <Stars rating={review.rating} />
            <blockquote className="spotlight__quote">{review.text}</blockquote>
            <figcaption className="spotlight__who">
              {review.name}
              <small>{review.role}</small>
            </figcaption>
          </figure>
        ))}
      </div>
      <button className="carousel__btn carousel__btn--next" aria-label="Next testimonial" onClick={() => goTo(index + 1)}>
        &#10095;
      </button>
      <div className="carousel__dots">
        {items.map((review, i) => (
          <button
            key={review.id}
            className="carousel__dot"
            aria-label={`Show testimonial ${i + 1} of ${count}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
