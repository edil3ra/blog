const rupture = require("rupture")


module.exports = {
  siteMetadata: {
    title: 'edil3ra blog',
    description: `<p> I have been working as professinal developer for 4 years now, I am fullstack developer with a very good knowledge of modern web application,  I can make spa application with react or vue, I also can build mobile application with react native, I can also make you a blog with (gastby, nikola, wodpress),
</p>
<p>
What I really love about software development is building an clean architecture, when I am working I always keep in mind that my code need to be simple, refactorable, reusable, extensible and testable, If another developer or even non developer can read and undestrand the code then I am proud of my job, I really like the flux pattern as it help splitting the logic and the view layer.
</p>
<p>
As a backend, I have a very good knowdledge on python, I build website with django, flask and aiohttp, I can make a restfull api, using websocked and graphql.
</p>
<p>
I am also a lisp hacker, I am extremly efficient with emacs
</p>
<p>
I Love to learn new programmingn languages, I have basic knowdledge in a lot of them, my main languages are python and javascript
</p>
<p>
This last year, I learn a lot about data analyse, data mining, machine learning, statistics, I love reading book on the subject.
</p>
`,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography.js',
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
