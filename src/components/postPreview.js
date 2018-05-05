import React from 'react';
import Link from 'gatsby-link';

const PostPreview = ({ node }) => (
  <div>
    <Link to={node.fields.slug}>
      {node.frontmatter.title} ({node.frontmatter.date})
    </Link>
    <div>{node.excerpt}</div>
  </div>
);

export default PostPreview;
