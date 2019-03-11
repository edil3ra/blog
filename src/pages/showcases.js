import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ShowCasesPage = () => (
  <StaticQuery
    query={graphql`
      query ShowcasesQuery {
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
        <p>Showcases</p>
      </Layout>
    )}
  />
)

export default ShowCasesPage
