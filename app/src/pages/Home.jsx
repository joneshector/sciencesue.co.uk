/**
 * Home page — hero, Meet Sue gallery, educational approach, CTA.
 * All copy and content structures come from src/data/site.data.js.
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel.jsx';
import CtaPanel from '../components/CtaPanel.jsx';
import { approachCards, galleryImages } from '../data/site.data.js';

/** Decorative floating doodles for the hero (purely presentational). */
function HeroDoodles() {
  return (
    <>
      <svg className="hero__doodle hero__doodle--1" viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="32" cy="32" rx="28" ry="11" transform="rotate(30 32 32)" />
        <ellipse cx="32" cy="32" rx="28" ry="11" transform="rotate(-30 32 32)" />
        <circle cx="32" cy="32" r="4" fill="currentColor" />
      </svg>
      <svg className="hero__doodle hero__doodle--2" viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M26 8h12M28 8v16l14 26a6 6 0 0 1-5 9H27a6 6 0 0 1-5-9l14-26V8" />
        <path d="M24 42h16" strokeLinecap="round" />
      </svg>
      <svg className="hero__doodle hero__doodle--3" viewBox="0 0 64 64" aria-hidden="true" fill="currentColor">
        <path d="M32 6l6.9 16.9L56 26l-13 12 3.6 17.6L32 46.5 17.4 55.6 21 38 8 26l17.1-3.1z" />
      </svg>
    </>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'Science Sue — Primary Science Tutoring & Educational Excellence';
  }, []);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <HeroDoodles />
        <div className="container">
          <h1 id="hero-title" className="hero__title">Welcome to Science Sue Homepage</h1>
          <p className="hero__subtitle">Inspiring Educational Excellence</p>
          <p className="hero__description">
            Providing high-quality educational services with a focus on education leadership,
            curriculum development, and academic achievement. Empowering schools to reach their
            full potential.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="meet-sue-title">
        <div className="container">
          <h2 id="meet-sue-title" className="section-title">Meet Sue</h2>
          <p className="section-lede">
            With over 35 years of experience in education, Sue has dedicated her career to
            inspiring students and fostering a love of science. Her passion for educational
            excellence and deep understanding of how students learn has helped countless
            young minds develop critical thinking skills and achieve their academic potential.
          </p>
          <Carousel images={galleryImages} label="Photos of Science Sue" />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="approach-title">
        <div className="container">
          <h2 id="approach-title" className="section-title">My Educational Approach</h2>
          <div className="card-grid">
            {approachCards.map((card) => (
              <div className="feature-card" key={card.title}>
                <span className="feature-card__icon" aria-hidden="true">{card.icon}</span>
                <h3>{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel title="Ready to Begin Your Educational Journey?" buttonText="Contact Us Today" />
    </>
  );
}
