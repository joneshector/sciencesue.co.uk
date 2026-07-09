/**
 * Footer — brand blurb, footer navigation and contact links.
 * Content driven by src/data/site.data.js.
 */
import { Link } from 'react-router-dom';
import { site, navigation } from '../data/site.data.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <span className="brand__name">{site.name}</span>
            <span className="brand__tag">{site.tagline}</span>
            <p>
              Providing high-quality educational services with a focus on education leadership,
              curriculum development, and academic achievement.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Explore</h2>
            <ul>
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Get in Touch</h2>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href="tel:+441234567890">{site.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} {site.name} — Sue Dudman Jones. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
