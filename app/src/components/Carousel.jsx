/**
 * Carousel — sliding image carousel (used for the "Meet Sue" gallery).
 * Auto-advances (unless the user prefers reduced motion), supports swipe,
 * arrows and dots. Pass any {src, alt}[] array.
 */
import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Carousel({ images, autoAdvanceMs = 6000, label = 'Image carousel' }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const count = images.length;

  const goTo = (i) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), autoAdvanceMs);
    return () => clearInterval(t);
  }, [paused, count, autoAdvanceMs]);

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <button className="carousel__btn carousel__btn--prev" aria-label="Previous image" onClick={() => goTo(index - 1)}>
        &#10094;
      </button>
      <div className="carousel__viewport">
        <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <div className="carousel__slide" key={img.src}>
              <img src={img.src} alt={img.alt} loading={i > 0 ? 'lazy' : undefined} width="1200" height="900" />
            </div>
          ))}
        </div>
      </div>
      <button className="carousel__btn carousel__btn--next" aria-label="Next image" onClick={() => goTo(index + 1)}>
        &#10095;
      </button>
      <div className="carousel__dots">
        {images.map((img, i) => (
          <button
            key={img.src}
            className="carousel__dot"
            aria-label={`Go to image ${i + 1} of ${count}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
