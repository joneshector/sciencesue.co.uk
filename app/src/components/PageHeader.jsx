/**
 * PageHeader — page title banner used by inner pages.
 * Also sets the document title for basic SEO parity.
 */
import { useEffect } from 'react';

export default function PageHeader({ title, lede, docTitle }) {
  useEffect(() => {
    document.title = docTitle || `${title} — Science Sue`;
  }, [title, docTitle]);

  return (
    <div className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
      </div>
    </div>
  );
}
