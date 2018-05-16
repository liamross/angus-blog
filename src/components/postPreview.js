import React from 'react';
import Link from 'gatsby-link';
import './postPreview.scss';

const PostPreview = ({ node }) => (
  <div className="preview">
    <div className="preview-header">
      <h4 className="preview-header-title">{node.frontmatter.title}</h4>
      <div className="preview-header-date">{node.frontmatter.date}</div>
    </div>
    <p className="preview-exerpt">{node.excerpt}</p>
    <div className="preview-link">
      <Link to={node.fields.slug}>Read more...</Link>
    </div>
  </div>
);

export default PostPreview;
