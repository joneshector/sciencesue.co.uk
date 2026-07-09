/**
 * Contact page — contact information + enquiry form.
 * The form is a mock: it opens the visitor's email client pre-filled via
 * mailto:. Swap `handleSubmit` for a POST to a form backend when one exists
 * (see docs/SCALING.md).
 */
import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { site, contactInfo, services } from '../data/site.data.js';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    const subject = encodeURIComponent(`[sciencesue.co.uk] ${data.subject || 'Enquiry'} — ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || '—'}\nSubject: ${data.subject}\n\n${data.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus('Thank you! Your email app should open with your message ready to send.');
    form.reset();
  }

  return (
    <>
      <PageHeader
        title="Get In Touch"
        lede="Ready to begin your educational journey? We'd love to hear from you. Contact us today to discuss how we can help you achieve your academic goals."
        docTitle="Contact — Science Sue"
      />

      <section className="section" aria-label="Contact details and enquiry form">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            {contactInfo.map((item) => (
              <div className="info-item" key={item.title}>
                <span className="info-item__icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.lines.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form-panel">
            <h2>Send Us a Message</h2>
            <form className="form-grid" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" autoComplete="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" autoComplete="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required defaultValue="">
                  <option value="" disabled>Select a subject</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>
              <div className="form-field form-field--full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Please tell us about your educational goals and how we can help..."
                  required
                />
              </div>
              <div className="form-field--full">
                <button type="submit" className="btn btn-primary">Send Message</button>
                <p className="form-status" role="status" aria-live="polite">{status}</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
