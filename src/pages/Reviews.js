/**
 * Reviews page component for Science Sue website
 * Displays student and parent testimonials
 */

import React from 'react';
import './Reviews.css';

/**
 * Reviews page component
 * @returns {JSX.Element} Reviews page with testimonials
 */
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent",
      content: "Science Sue has transformed my daughter's understanding of science. The personalized approach and engaging teaching methods have made all the difference. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Student (Grade 10)",
      content: "I used to struggle with chemistry, but Sue's clear explanations and practical examples helped me not only understand but actually enjoy the subject. My grades have improved significantly!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Parent",
      content: "Professional, knowledgeable, and patient. Sue has a gift for making complex scientific concepts accessible to young minds. Our son's confidence in science has grown tremendously.",
      rating: 5
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Student (Grade 12)",
      content: "The preparation for my A-Level exams was excellent. Sue's structured approach and additional practice materials were exactly what I needed to achieve top grades.",
      rating: 5
    }
  ];

  /**
   * Render star rating
   * @param {number} rating - Rating value (1-5)
   * @returns {JSX.Element} Star rating display
   */
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`star ${index < rating ? 'star-filled' : ''}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="reviews">
      <div className="container">
        {/* Page Header */}
        <section className="reviews-header">
          <h1>What Our Students Say</h1>
          <p className="reviews-subtitle">
            Discover how Science Sue has helped students achieve their educational goals 
            and develop a genuine passion for scientific learning.
          </p>
        </section>

        {/* Reviews Grid */}
        <section className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h3 className="reviewer-name">{review.name}</h3>
                  <p className="reviewer-role">{review.role}</p>
                </div>
                {renderStars(review.rating)}
              </div>
              <blockquote className="review-content">
                "{review.content}"
              </blockquote>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="reviews-cta">
          <div className="cta-box">
            <h2>Ready to Join Our Success Stories?</h2>
            <p>
              Experience the difference that personalized, professional science education can make. 
              Contact us today to begin your educational journey.
            </p>
            <a href="/contact" className="btn btn-primary">
              Get Started Today
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews; 