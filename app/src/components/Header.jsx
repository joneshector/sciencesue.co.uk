/**
 * Header — sticky site header with responsive navigation.
 * Links are driven by `navigation` in src/data/site.data.js.
 */
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { site, navigation } from '../data/site.data.js';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label={`${site.name} — home`}>
          <img className="brand__mark" src="/favicon.svg" alt="" width="38" height="38" />
          <span>
            <span className="brand__name">{site.name}</span>
            <span className="brand__tag">{site.tagline}</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav
          id="site-nav"
          className={`site-nav${open ? ' is-open' : ''}`}
          aria-label="Main navigation"
          onClick={() => setOpen(false)}
        >
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </nav>
      </div>
    </header>
  );
}
