import React from 'react'
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import css from '../assets/css/header.module.scss'

const Header = ({ siteTitle, social }) => {
  return (
    <nav className={`${css.navbar} ${css.isFixedTop} ${css.isPrimary}`}
         role="navigation"
         aria-label="main navigation">
      <div className={css.navbarBrand}>
        <Link to="/" className={css.navbarItem}>
          <div className={css.mindullcode}>
            <div> _ __ ___  (_) _ __    __| | / _| _   _ | || |  ___   ___    __| |  ___ </div>
            <div>| '_ ` _ \ | || '_ \  / _` || |_ | | | || || | / __| / _ \  / _` | / _ \</div>
            <div>| | | | | || || | | || (_| ||  _|| |_| || || || (__ | (_) || (_| ||  __/</div>
            <div>|_| |_| |_||_||_| |_| \__,_||_|   \__,_||_||_| \___| \___/  \__,_| \___|</div>
          </div>
        </Link>
      </div>
      <div className={css.navbarMenu}>
        <div className={css.navbarStart}>
          <Link to="/" className={css.navbarItem}>
            Articles
          </Link>
          <Link to="/" className={css.navbarItem}>
            Tutorial
          </Link>
          <Link to="/" className={css.navbarItem}>
            ShowCase
          </Link>
          <Link to="/" className={css.navbarItem}>
            Games
          </Link>
        </div>
        <div className={css.navbarEnd}>
          <div className={`${css.navbarItem} ${css.hasDropdown} ${css.isHoverable} ${css.isRight}`}>
            <a className={css.navbarLink}>
              More
            </a>
            <div className={css.navbarDropdown}>
              <a href={social.github.link} className={css.navbarItem}>
                { social.github.title }
              </a>
              <a href={social.linkedin.link} className={css.navbarItem}>
                { social.linkedin.title }
              </a>
              <hr className={css.navbarDivider}/>
              <a className={css.navbarItem}>
                cv
              </a>
            </div>
          </div>
        </div>
      </div>
      <a role="button" className={css.navbarBurger} aria-label="menu" aria-expanded="false">
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
