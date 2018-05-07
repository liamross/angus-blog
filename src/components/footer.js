import React from 'react';
import Link from 'gatsby-link';
import './footer.scss';

function Footer({ previous, next }) {
  return (
    <div className="footer">
      <div className="footer-previous">
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </div>
      <div className="footer-home">
        <Link to="/" rel="next">
          Return to home
        </Link>
      </div>
      <div className="footer-next">
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </div>
    </div>
  );
}

export default Footer;
