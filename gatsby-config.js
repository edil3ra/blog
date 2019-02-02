module.exports = {
  siteMetadata: {
    title: 'edil3ra blog',
    description: `I am mostly did front end development in react and vue this last 2 years, What I like in developing is the architecture, I always try to build something that is easy to used, reafoctor and understand, I really like the functional style programming paradimn, When I building something, I always keep in mind that another developer will used my code \n I always have an exellent knowledge of python and some knowledge on machine learning.`,
    author: `edil3ra`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
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
