/**
 * spotlight.js — featured-testimonial carousel
 * ---------------------------------------------------------------------------
 * Cross-fades through the reviews flagged `featured` in reviews.data.js.
 * This is the industry-standard testimonial pattern for services sites:
 * a handful of standout quotes cycle in a spotlight, while the complete
 * list remains available below (see reviews.js). Presentation only —
 * review content is rendered verbatim from data.
 *
 * @param {HTMLElement} root  container with .spotlight markup slots
 * @param {Array} items       review objects ({name, role, text})
 */
export function createSpotlight(root, items, { autoAdvanceMs = 8000 } = {}) {
  const stage = root.querySelector('.spotlight__stage');
  const dots = root.querySelector('.carousel__dots');
  const prev = root.querySelector('.carousel__btn--prev');
  const next = root.querySelector('.carousel__btn--next');
  if (!stage || !items.length) return;

  let index = 0;
  let timer = null;

  const cards = items.map((review, i) => {
    const card = document.createElement('figure');
    card.className = 'spotlight__card';
    card.setAttribute('aria-hidden', 'true');

    const quote = document.createElement('blockquote');
    quote.className = 'spotlight__quote';
    quote.textContent = review.text; // textContent: renders data verbatim, safely

    const who = document.createElement('figcaption');
    who.className = 'spotlight__who';
    who.textContent = review.name;
    const role = document.createElement('small');
    role.textContent = review.role;
    who.appendChild(role);

    const stars = document.createElement('div');
    stars.className = 'stars';
    stars.setAttribute('role', 'img');
    stars.setAttribute('aria-label', `${review.rating} out of 5 stars`);
    stars.textContent = '★'.repeat(review.rating);

    card.append(stars, quote, who);
    stage.appendChild(card);

    if (dots) {
      const dot = document.createElement('button');
      dot.className = 'carousel__dot';
      dot.setAttribute('aria-label', `Show testimonial ${i + 1} of ${items.length}`);
      dot.addEventListener('click', () => goTo(i));
      dots.appendChild(dot);
    }

    return card;
  });

  function render() {
    cards.forEach((card, i) => {
      card.classList.toggle('is-active', i === index);
      card.setAttribute('aria-hidden', String(i !== index));
    });
    if (dots) {
      dots.querySelectorAll('.carousel__dot').forEach((d, i) => {
        d.setAttribute('aria-current', String(i === index));
      });
    }
  }

  function goTo(i) {
    index = (i + items.length) % items.length;
    render();
    restartTimer();
  }

  function restartTimer() {
    if (timer) clearInterval(timer);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => goTo(index + 1), autoAdvanceMs);
  }

  prev?.addEventListener('click', () => goTo(index - 1));
  next?.addEventListener('click', () => goTo(index + 1));
  root.addEventListener('mouseenter', () => timer && clearInterval(timer));
  root.addEventListener('mouseleave', restartTimer);

  render();
  restartTimer();
}
