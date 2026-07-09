/**
 * contact.js — contact page entry module
 * ---------------------------------------------------------------------------
 * The form is currently a mock (no backend on GitHub Pages): on submit it
 * validates, then opens the visitor's email client pre-filled via mailto:
 * so enquiries still reach Sue. docs/SCALING.md documents the upgrade path
 * to a real form backend (Formspree / self-hosted endpoint on a Droplet).
 */
import { site } from './data/site.data.js';

const form = document.getElementById('contact-form');
const status = document.querySelector('.form-status');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  const data = Object.fromEntries(new FormData(form).entries());
  const subject = encodeURIComponent(`[sciencesue.co.uk] ${data.subject || 'Enquiry'} — ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || '—'}\nSubject: ${data.subject}\n\n${data.message}`,
  );

  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

  if (status) {
    status.textContent =
      'Thank you! Your email app should open with your message ready to send.';
  }
  form.reset();
});
