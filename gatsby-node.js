const path = require('path');

/**
 * Formats blog post titles in word-word format for URL.
 * @param {string} title - Unformatted title of blog post.
 */
function titleFormatter(title) {
  if (title && typeof title === 'string') {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z\- ]/g, '')
      .replace(/ /g, '-')
      .replace(/-+/g, '-');
  }
  return '';
}

/**
 * Generate blog pages from markdown
 */
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const BlogTemplate = path.resolve(`src/templates/blogTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: node.fields.slug,
        component: BlogTemplate,
        context: {
          slug: node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = '/' + titleFormatter(node.frontmatter.title);
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
