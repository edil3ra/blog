import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GamesPage = () => (
  <StaticQuery
    query={graphql`
      query GamesQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`edil3ra`, `Home`, `software developer`]} />
        <p>Games</p>
      </Layout>
    )}
  />
)

export default GamesPage
