/**
 * Reviews page — featured-testimonial spotlight + complete filterable list.
 * Review content comes verbatim from src/data/reviews.data.js and must
 * never be edited here (presentation only).
 */
import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Spotlight from '../components/Spotlight.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import CtaPanel from '../components/CtaPanel.jsx';
import { reviews, featuredReviews, REVIEW_GROUPS } from '../data/reviews.data.js';

export default function Reviews() {
  const [group, setGroup] = useState('all');
  const visible = group === 'all' ? reviews : reviews.filter((r) => r.group === group);

  return (
    <>
      <PageHeader
        title="What Our Students Say"
        lede="Discover how Science Sue has helped students achieve their educational goals and develop a genuine passion for scientific learning."
        docTitle="Reviews & Testimonials — Science Sue"
      />

      <section className="section" aria-label="Featured testimonials">
        <div className="container">
          <Spotlight items={featuredReviews} />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="all-reviews-title">
        <div className="container">
          <h2 id="all-reviews-title" className="section-title">Every Review</h2>
          <p className="section-lede">
            {group === 'all'
              ? `Showing all ${visible.length} reviews`
              : `Showing ${visible.length} of ${reviews.length} reviews`}
          </p>
          <div className="review-filters" role="group" aria-label="Filter reviews by reviewer type">
            {REVIEW_GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                aria-pressed={group === g.id}
                onClick={() => setGroup(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
          <div className="reviews-grid">
            {visible.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <CtaPanel
        title="Ready to Join Our Success Stories?"
        body="Experience the difference that personalized, professional science education can make. Contact us today to begin your educational journey."
        buttonText="Get Started Today"
      />
    </>
  );
}
