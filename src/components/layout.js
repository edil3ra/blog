import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql} from "gatsby"
import css from '../assets/css/layout.module.scss'
import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayouteQuery {
        site {
          siteMetadata {
            title
            social {
              github {
                title
                link
              }
              linkedin {
                title
                link
              }
            }
          }
        }
      }
    `}
    render={data => {
      return(
        <div>
          <Header
            siteTitle={data.site.siteMetadata.title}
            social={data.site.siteMetadata.social}
          />
          <div className={`${css.myMainContent} ${css.container}`}>
            <main >{children}</main>
          </div>
        </div>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
