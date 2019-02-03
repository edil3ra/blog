module.exports = {
  siteMetadata: {
    title: 'edil3ra blog',
    description: `<p> For the last 2 years I professionally work on fornt end development, I have a very good knowdledge about creating web application with modern technology, (es6, typescript elm, react and vue), I also have good knowdledge on integration, I build several website with modern work like material design, quasar, stylus, grid system...
</p>
<p>
What is really interest me is the archicture, When I am working on a complex problem, I always keep in mind that others devolper will used my code, so I try to be very clever and keep it simple, The that I wrote is always clear and easy to refactor, I have a very good knowdledge of the flux pattern, so the logic layer and the view are always split, that make the application testable and maintenable.
</p>  
<p>
I Have very good knowdledge on python, I have build multiple site in django and work with flask, sanic, and aiohttp, so I cam nake restfull api tested with good documentation.
</p>
<p>
I Love to learn new programmingn languages, I have basic knowdledge in a lot of them but my main languages are python and javascript
</p>
<p>
  This last year, I learn a lot about data analyse, data mining, machine learning, I don\'t have a mathematical background but I learn some statistics with a lot of differents books, knowing how to code can drastcly speed the acquisition of knowldege.
</p>`,
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
