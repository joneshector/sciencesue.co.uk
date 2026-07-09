/**
 * reviews.js — reviews page entry module
 * ---------------------------------------------------------------------------
 * Renders the featured-testimonial spotlight and the complete, filterable
 * review list from reviews.data.js. All review content is rendered verbatim
 * via textContent — this module controls presentation only.
 */
import { reviews, featuredReviews, REVIEW_GROUPS } from './data/reviews.data.js';
import { createSpotlight } from './spotlight.js';

/** Builds one review card element (content verbatim from data). */
function buildReviewCard(review) {
  const card = document.createElement('article');
  card.className = 'review-card reveal is-visible';
  card.dataset.group = review.group;

  const head = document.createElement('div');
  head.className = 'review-card__head';

  const who = document.createElement('div');
  const name = document.createElement('h3');
  name.className = 'review-card__name';
  name.textContent = review.name;
  const role = document.createElement('p');
  role.className = 'review-card__role';
  role.textContent = review.role;
  who.append(name, role);

  const stars = document.createElement('div');
  stars.className = 'stars';
  stars.setAttribute('role', 'img');
  stars.setAttribute('aria-label', `${review.rating} out of 5 stars`);
  stars.textContent = '★'.repeat(review.rating);

  head.append(who, stars);

  const quote = document.createElement('blockquote');
  quote.textContent = review.text;

  card.append(head, quote);
  return card;
}

/** Renders the filter buttons and wires up filtering. */
function initFilters(grid, countEl) {
  const bar = document.querySelector('.review-filters');
  if (!bar) return;

  REVIEW_GROUPS.forEach((group) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = group.label;
    btn.setAttribute('aria-pressed', String(group.id === 'all'));
    btn.addEventListener('click', () => {
      bar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');

      let shown = 0;
      grid.querySelectorAll('.review-card').forEach((card) => {
        const show = group.id === 'all' || card.dataset.group === group.id;
        card.style.display = show ? '' : 'none';
        if (show) shown += 1;
      });
      if (countEl) {
        countEl.textContent =
          group.id === 'all'
            ? `Showing all ${shown} reviews`
            : `Showing ${shown} of ${reviews.length} reviews`;
      }
    });
    bar.appendChild(btn);
  });
}

function init() {
  // Spotlight carousel (featured subset — every review still listed below)
  const spotlightRoot = document.querySelector('.spotlight');
  if (spotlightRoot) createSpotlight(spotlightRoot, featuredReviews);

  // Full list
  const grid = document.querySelector('.reviews-grid');
  const countEl = document.querySelector('[data-review-count]');
  if (grid) {
    reviews.forEach((review) => grid.appendChild(buildReviewCard(review)));
    if (countEl) countEl.textContent = `Showing all ${reviews.length} reviews`;
    initFilters(grid, countEl);
  }
}

init();
