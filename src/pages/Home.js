/**
 * Home page component for Science Sue website
 * Main landing page with professional educational content
 */

import React from 'react';
import './Home.css';

/**
 * Home page component
 * @returns {JSX.Element} Home page with hero section and key information
 */
const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to Science Sue
            </h1>
            <p className="hero-subtitle">
              Inspiring Educational Excellence Through Science
            </p>
            <p className="hero-description">
              Providing high-quality educational services with a focus on scientific literacy, 
              critical thinking, and academic achievement. Empowering students to reach their 
              full potential through personalized learning experiences.
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="/about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Our Educational Approach</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Scientific Method</h3>
              <p>
                Building strong foundations in scientific thinking and methodology 
                to develop critical analysis skills.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Personalized Learning</h3>
              <p>
                Tailored educational experiences that adapt to each student's 
                unique learning style and pace.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Academic Excellence</h3>
              <p>
                Focused on achieving outstanding results while fostering a 
                genuine love for learning and discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Educational Journey?</h2>
            <p>
              Join our community of learners and discover the joy of scientific discovery. 
              Contact us today to learn more about our educational programs.
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 