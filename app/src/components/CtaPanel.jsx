/**
 * CtaPanel — reusable call-to-action banner.
 * @param {string} title      heading text
 * @param {string} [body]     optional supporting paragraph
 * @param {string} buttonText CTA label
 * @param {string} [to='/contact'] router target
 */
import { Link } from 'react-router-dom';

export default function CtaPanel({ title, body, buttonText, to = '/contact' }) {
  return (
    <section className="section" aria-label={title}>
      <div className="container">
        <div className="cta-panel">
          <h2>{title}</h2>
          {body && <p>{body}</p>}
          <Link to={to} className="btn btn-primary">{buttonText}</Link>
        </div>
      </div>
    </section>
  );
}
