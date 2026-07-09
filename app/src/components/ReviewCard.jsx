/**
 * ReviewCard — one testimonial in the full reviews list.
 * Renders review data verbatim; never transforms the text.
 */
import Stars from './Stars.jsx';

export default function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card__head">
        <div>
          <h3 className="review-card__name">{review.name}</h3>
          <p className="review-card__role">{review.role}</p>
        </div>
        <Stars rating={review.rating} />
      </div>
      <blockquote>{review.text}</blockquote>
    </article>
  );
}
