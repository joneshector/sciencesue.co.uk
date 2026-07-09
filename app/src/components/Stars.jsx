/** Stars — accessible star-rating display. */
export default function Stars({ rating }) {
  return (
    <div className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
    </div>
  );
}
