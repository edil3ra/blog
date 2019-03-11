import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <StaticQuery
    query={graphql`
      query ArticlesQuery {
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
        <p>Articles</p>
      </Layout>
    )}
  />
)

export default ArticlesPage
