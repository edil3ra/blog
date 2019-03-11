import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TutorialsPage = () => (
  <StaticQuery
    query={graphql`
      query TutorialsQuery {
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
        <p>Tutorials</p>
      </Layout>
    )}
  />
)

export default TutorialsPage
