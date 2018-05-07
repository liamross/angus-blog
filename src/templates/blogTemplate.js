import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Footer from '../components/footer';
import './blogTemplate.scss';

function BlogTemplate({ data, pathContext }) {
  const {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = data;

  const { previous, next } = pathContext;

  return (
    <div className="blog-post-container">
      <Helmet title={`${title} | ${siteTitle}`} />
      <div className="blog-post">
        <div className="blog-post-wrapper">
          <div className="blog-post-header">
            <h1 className="blog-post-header-title">{title}</h1>
            <h3 className="blog-post-header-date">{date}</h3>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      <Footer previous={previous} next={next} />
    </div>
  );
}

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
