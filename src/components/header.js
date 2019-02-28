import React from 'react'
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import style from '../assets/css/header.module.sass'

const Header = ({ siteTitle, social }) => {
  return (
    <nav className={`${style.navbar} ${style.isFixedTop} ${style.isPrimary}`}
         role="navigation"
         aria-label="main navigation">
      <div className={style.navbarBrand}>
        <Link to="/" className={style.navbarItem}>
          <img src="https://bulma.io/images/bulma-logo.png" alt="REPLACE IMAGE" width="112" height="28" />
        </Link>
      </div>
      <div className={style.navbarMenu}>
        <div className={style.navbarStart}>
          <Link to="/" className={style.navbarItem}>
            Articles
          </Link>
          <Link to="/" className={style.navbarItem}>
            Tutorial
          </Link>
          <Link to="/" className={style.navbarItem}>
            ShowCase
          </Link>
          <Link to="/" className={style.navbarItem}>
            Games
          </Link>
        </div>
        <div className={style.navbarEnd}>
          <div className={`${style.navbarItem} ${style.hasDropdown} ${style.isHoverable} ${style.isRight}`}>
            <a className={style.navbarLink}>
              More
            </a>
            <div className={style.navbarDropdown}>
              <a href={social.github.link} className={style.navbarItem}>
                { social.github.title }
              </a>
              <a href={social.linkedin.link} className={style.navbarItem}>
                { social.linkedin.title }
              </a>
              <hr className={style.navbarDivider}/>
              <a className={style.navbarItem}>
                cv
              </a>
            </div>
          </div>
        </div>
      </div>
      <a role="button" className={style.navbarBurger} aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </nav>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
