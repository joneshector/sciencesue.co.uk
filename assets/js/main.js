/**
 * main.js — global behaviour loaded on every page
 * ---------------------------------------------------------------------------
 * Responsibilities: sticky-header state, mobile navigation toggle,
 * scroll-reveal animations, and the footer year. Page-specific behaviour
 * lives in its own module (home.js, reviews.js, contact.js).
 */

/** Adds a shadow/border to the header once the page is scrolled. */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/** Hamburger toggle for the mobile navigation. */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close the menu when a link is chosen (single-page anchors or otherwise)
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Scroll-reveal: elements with .reveal / .reveal-stagger fade-slide in the
 * first time they enter the viewport. Falls back gracefully (elements are
 * simply visible) when IntersectionObserver or motion is unavailable.
 */
function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  targets.forEach((el) => observer.observe(el));
}

/** Keeps the footer copyright year current. */
function initFooterYear() {
  const el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
}

initHeader();
initMobileNav();
initReveal();
initFooterYear();
