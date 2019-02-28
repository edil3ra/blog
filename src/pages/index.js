import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
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
        <div dangerouslySetInnerHTML={{__html: data.site.siteMetadata.description}} />

        <p>Enim tortor, at auctor urna nunc id cursus. Neque ornare aenean euismod elementum nisi, quis eleifend quam adipiscing vitae proin sagittis, nisl rhoncus mattis rhoncus, urna neque viverra justo, nec.</p>
        <Link to="cv"> CV </Link>
      </Layout>
    )}
  />
)

export default IndexPage
