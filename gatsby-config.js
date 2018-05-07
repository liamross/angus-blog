module.exports = {
  siteMetadata: {
    title: 'Caffeine Creations',
    author: 'Angus Ross',
    description: 'A Blog.',
    siteUrl: 'www.caffeine-creations.ca',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Caffeine Creations',
        short_name: 'Caffeine Creations',
        start_url: '/',
        theme_color: '#F4F4F4',
        background_color: '#A6A6A6',
        display: 'standalone',
        icon: 'src/img/logos/cc-logo-512.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-118772303-1',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
};
