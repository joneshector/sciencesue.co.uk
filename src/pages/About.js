/**
 * About page component for Science Sue website
 * Provides information about qualifications, experience, and educational approach
 */

import React from 'react';
import './About.css';

/**
 * About page component
 * @returns {JSX.Element} About page with professional information
 */
const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Page Header */}
        <section className="about-header">
          <h1>About Science Sue</h1>
          <p className="about-subtitle">
            Dedicated to inspiring scientific curiosity and academic excellence 
            through personalized education and professional expertise.
          </p>
        </section>

        {/* Main Content */}
        <section className="about-content">
          <div className="about-grid">
            {/* Professional Profile */}
            <div className="profile-section">
              <div className="profile-card">
                <div className="profile-image">
                  <div className="profile-placeholder">👩‍🔬</div>
                </div>
                <div className="profile-info">
                  <h2>Science Sue</h2>
                  <p className="profile-title">Science Education Specialist</p>
                  <p className="profile-credentials">
                    Certified Legend<br />
                    Certified Science Teacher<br />
                    20+ Years Teaching Experience
                  </p>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="about-text">
              <h2>My Educational Philosophy</h2>
              <p>
                I believe that every student has the potential to excel in science when provided 
                with the right guidance, support, and learning environment. My approach combines 
                rigorous academic standards with engaging, practical methods that make complex 
                scientific concepts accessible and enjoyable.
              </p>

              <p>
                With over 15 years of experience in science education, I have had the privilege 
                of helping hundreds of students discover their passion for scientific learning 
                and achieve their academic goals. From struggling beginners to advanced students 
                preparing for university entrance, I tailor my teaching methods to meet each 
                student's unique needs and learning style.
              </p>

              <h3>My Approach</h3>
              <ul className="approach-list">
                <li>
                  <strong>Personalized Learning:</strong> Every student learns differently. 
                  I adapt my teaching methods to match individual learning styles and pace.
                </li>
                <li>
                  <strong>Practical Application:</strong> Science comes alive when students 
                  can see real-world applications and conduct hands-on experiments.
                </li>
                <li>
                  <strong>Building Confidence:</strong> I focus on building students' 
                  confidence through positive reinforcement and achievable goals.
                </li>
                <li>
                  <strong>Critical Thinking:</strong> Beyond memorization, I encourage 
                  students to question, analyze, and think critically about scientific concepts.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="qualifications">
          <h2>Qualifications & Experience</h2>
          <div className="qualifications-grid">
            <div className="qualification-card">
              <div className="qual-icon">🎓</div>
              <h3>Education</h3>
              <ul>
                <li>[Qualification] - [University or Institute]</li>
              </ul>
            </div>

            <div className="qualification-card">
              <div className="qual-icon">🏆</div>
              <h3>Achievements</h3>
              <ul>
                <li>[Award] [Awarding Body]</li>
              </ul>
            </div>

            <div className="qualification-card">
              <div className="qual-icon">🔬</div>
              <h3>Specializations</h3>
              <ul>
                <li>GCSE & A-Level Chemistry</li>
                <li>GCSE & A-Level Biology</li>
                <li>GCSE Physics</li>
                <li>University entrance preparation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <div className="cta-box">
            <h2>Ready to Start Your Scientific Journey?</h2>
            <p>
              Let's work together to unlock your potential in science. Contact me today 
              to discuss your educational goals and how I can help you achieve them.
            </p>
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 