import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql} from "gatsby"
import style from '../assets/css/layout.module.sass'
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
          <div style={{marginTop: '60px'}}>
            <span className={style.icon}>
              <i className={`${style.fa} ${style.faLinkedin}`}></i>
            </span>
            <main>{children}</main>
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
