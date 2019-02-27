const rupture = require("rupture")


module.exports = {
  siteMetadata: {
    title: 'Coding Fun',
    description: `Learniing to code by doing simple, usefull and fun project, This blog will contain short article, book review, programming tips and tutorials`,
    author: `edil3ra`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-stylus",
      options: {
        use: [rupture()],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require('sass')
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
