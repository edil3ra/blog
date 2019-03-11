import React from 'react'
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import css from '../assets/css/header.module.scss'

const Header = ({ siteTitle, social }) => {
  return (
    <nav className={`${css.navbar} ${css.isFixedTop} ${css.isPrimary}`}
         role="navigation"
         aria-label="main navigation">
      <div className={`${css.container}`}>
        <div className={`${css.navbarBrand}`}>
          <Link to="/" className={css.navbarItem}>
            <div className={css.mindullcode}>
              <div> _ __ ___  (_) _ __    __| | / _| _   _ | || |  ___   ___    __| |  ___  _ __ </div>
              <div>| '_ ` _ \ | || '_ \  / _` || |_ | | | || || | / __| / _ \  / _` | / _ \| '__|</div>
              <div>| | | | | || || | | || (_| ||  _|| |_| || || || (__ | (_) || (_| ||  __/| |   </div>
              <div>|_| |_| |_||_||_| |_| \__,_||_|   \__,_||_||_| \___| \___/  \__,_| \___||_|   </div>
            </div>
          </Link>
        </div>
        <div className={css.navbarMenu}>
          <div className={`${css.navbarStart} ${css.myNavbarStart}`}>
            <Link to="articles" className={css.navbarItem}>
              <span className={css.icon}>
                <i className={`${css.fa} ${css.faPuzzlePiece}`}></i>
              </span>
              <span>Articles</span>
            </Link>
            <Link to="tutorials" className={css.navbarItem}>
              <span className={css.icon}>
                <i className={`${css.fa} ${css.faFlask}`}></i>
              </span>
              <span>Tutorial</span>
            </Link>
            <Link to="showcases" className={css.navbarItem}>
              <span className={css.icon}>
                <i className={`${css.fa} ${css.faTerminal}`}></i>
              </span>
              <span>Showcases</span>
            </Link>
            <Link to="games" className={css.navbarItem}>
              <span className={css.icon}>
                <i className={`${css.fa} ${css.faGamepad}`}></i>
              </span>
              <span>Games</span>
            </Link>
          </div>
          <div className={css.navbarEnd}>
            <div className={`${css.navbarItem} ${css.hasDropdown} ${css.isHoverable} ${css.isRight}`}>
              <a className={css.navbarLink}>
                More
              </a>
              <div className={css.navbarDropdown}>
                <a href={social.github.link} className={css.navbarItem}>
                  <span className={css.icon}>
                    <i className={`${css.fa} ${css.faGithub}`}></i>
                  </span>
                  <span>{ social.github.title }</span>
                </a>
                <a href={social.linkedin.link} className={css.navbarItem}>
                  <span className={css.icon}>
                    <i className={`${css.fa} ${css.faLinkedin}`}></i>
                  </span>
                  <span>{ social.linkedin.title }</span>
                </a>
                <hr className={css.navbarDivider}/>
                <Link to="cv" className={css.navbarItem}>
                  <span className={css.icon}>
                    <i className={`${css.fa} ${css.faUser}`}></i>
                  </span>
                  <span>About me</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <a role="button" className={css.navbarBurger} aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
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
