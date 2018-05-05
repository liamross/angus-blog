module.exports = {
  siteMetadata: {
    title: 'Caffeine Creations',
    author: 'Angus Ross',
    description: 'A Blog.',
    siteUrl: 'www.caffeine-creations.ca',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
};
