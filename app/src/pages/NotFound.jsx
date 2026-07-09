/** NotFound — 404 route. */
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page Not Found" lede="The page you're looking for doesn't exist or has moved." />
      <section className="section" style={{ textAlign: 'center' }}>
        <Link to="/" className="btn btn-primary">Back to the homepage</Link>
      </section>
    </>
  );
}
