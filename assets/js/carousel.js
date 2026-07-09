/**
 * carousel.js — generic sliding image carousel
 * ---------------------------------------------------------------------------
 * Builds a slide carousel inside `root` from an array of {src, alt} images.
 * Used for the "Meet Sue" gallery on the home page. Keyboard accessible
 * (buttons are real <button>s), swipe-enabled on touch devices, and images
 * beyond the first are lazy-loaded.
 *
 * @param {HTMLElement} root   container with .carousel markup slots
 * @param {{src: string, alt: string}[]} images
 * @param {{autoAdvanceMs?: number}} [options]
 */
export function createCarousel(root, images, { autoAdvanceMs = 6000 } = {}) {
  const track = root.querySelector('.carousel__track');
  const dots = root.querySelector('.carousel__dots');
  const prev = root.querySelector('.carousel__btn--prev');
  const next = root.querySelector('.carousel__btn--next');
  if (!track || !dots || !prev || !next || !images.length) return;

  let index = 0;
  let timer = null;

  // Build slides + dots from data
  images.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel__slide';
    slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" ${i > 0 ? 'loading="lazy"' : ''} width="1200" height="900">`;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'carousel__dot';
    dot.setAttribute('aria-label', `Go to image ${i + 1} of ${images.length}`);
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
  });

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.querySelectorAll('.carousel__dot').forEach((d, i) => {
      d.setAttribute('aria-current', String(i === index));
    });
  }

  function goTo(i) {
    index = (i + images.length) % images.length;
    render();
    restartTimer();
  }

  function restartTimer() {
    if (timer) clearInterval(timer);
    // Respect reduced-motion preferences: no auto-advance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => goTo(index + 1), autoAdvanceMs);
  }

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));

  // Pause auto-advance while the user is interacting
  root.addEventListener('mouseenter', () => timer && clearInterval(timer));
  root.addEventListener('mouseleave', restartTimer);

  // Basic swipe support
  let startX = null;
  root.addEventListener('touchstart', (e) => (startX = e.touches[0].clientX), { passive: true });
  root.addEventListener(
    'touchend',
    (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
      startX = null;
    },
    { passive: true },
  );

  render();
  restartTimer();
}
