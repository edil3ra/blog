import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql} from "gatsby"
import 'bulma/css/bulma.css'
import css from '../assets/css/cv.module.scss'

import blank from '../assets/images/logo/blank.jpg'
import logoAiohttp from '../assets/images/logo/aiohttp-logo.png'
import logoAngular from '../assets/images/logo/angular-logo.png'
import logoApache from '../assets/images/logo/apache-logo.jpg'
import logoArch from '../assets/images/logo/archlinux-logo.jpg'
import logoAws from '../assets/images/logo/aws-logo.png'
import logoBitbucket from '../assets/images/logo/bitbucket-logo.jpeg'
import logoBootstrap from '../assets/images/logo/bootstrap-logo.jpg'
import logoBrunch from '../assets/images/logo/brunch-logo.png'
import logoClojure from '../assets/images/logo/clojure-logo.png'
import logoCss from '../assets/images/logo/css3-logo.png'
import logoDebian from '../assets/images/logo/debian-logo.jpg'
import logoDjango from '../assets/images/logo/django-logo.png'
import logoDocker from '../assets/images/logo/docker-logo.png'
import logoDynamodb from '../assets/images/logo/dynamodb-logo.jpg'
import logoElisp from '../assets/images/logo/lisp-logo.png'
import logoElixir from '../assets/images/logo/elixir-logo.png'
import logoEmacs from '../assets/images/logo/emacs-logo.png'
import logoFlask from '../assets/images/logo/flask-logo.jpg'
import logoFoundation from '../assets/images/logo/foundation-logo.png'
import logoGatsby from '../assets/images/logo/gatsby-logo.png'
import logoGit from '../assets/images/logo/git-logo.png'
import logoGithub from '../assets/images/logo/github-logo.png'
import logoGitlab from '../assets/images/logo/gitlab-logo.png'
import logoGooglecloud from '../assets/images/logo/googlecloud-logo.jpg'
import logoGrunt from '../assets/images/logo/grunt-logo.png'
import logoGulp from '../assets/images/logo/gulp-logo.png'
import logoJava from '../assets/images/logo/java-logo.png'
import logoJavascript from '../assets/images/logo/javascript-logo.png'
import logoJira from '../assets/images/logo/jira-logo.png'
import logoJquery from '../assets/images/logo/jquery-logo.gif'
import logoMaterialize from '../assets/images/logo/materialize-logo.png'
import logoMongo from '../assets/images/logo/mongo-logo.png'
import logoMysql from '../assets/images/logo/mysql-logo.png'
import logoNginx from '../assets/images/logo/nginx-logo.png'
import logoNikola from '../assets/images/logo/nikola-logo.png'
import logoNode from '../assets/images/logo/nodejs-logo.jpg'
import logoPhp from '../assets/images/logo/php-logo.png'
import logoPostgresql from '../assets/images/logo/postgresql-logo.png'
import logoPython from '../assets/images/logo/python-logo.png'
import logoReact from '../assets/images/logo/react-logo.png'
import logoReactNative from '../assets/images/logo/react-native-logo.png'
import logoRedhat from '../assets/images/logo/redhat-logo.png'
import logoRedis from '../assets/images/logo/redis-logo.png'
import logoRedux from '../assets/images/logo/redux-logo.png'
import logoRuby from '../assets/images/logo/ruby-logo.png'
import logoSass from '../assets/images/logo/sass-logo.png'
import logoSqlite from '../assets/images/logo/sqlite-logo.jpeg'
import logoTypescript from '../assets/images/logo/typescript-logo.png'
import logoUbuntu from '../assets/images/logo/ubuntu-logo.jpg'
import logoVagrant from '../assets/images/logo/vagrant-logo.png'
import logoWebpack from '../assets/images/logo/webpack-logo.png'
import logoVue from '../assets/images/logo/vue-logo.png'
import logoQuasar from '../assets/images/logo/quasar-logo.png'

const skillToImage = name => {
  const icons = [
    { name: 'Aiohttp', img: logoAiohttp },
    { name: 'Angular', img: logoAngular },
    { name: 'Apache', img: logoApache },
    { name: 'Arch', img: logoArch },
    { name: 'Aws', img: logoAws },
    { name: 'Bitbucket', img: logoBitbucket },
    { name: 'Bootstrap', img: logoBootstrap },
    { name: 'Brunch', img: logoBrunch },
    { name: 'Clojure', img: logoClojure },
    { name: 'Css', img: logoCss },
    { name: 'Debian', img: logoDebian },
    { name: 'Django', img: logoDjango },
    { name: 'Docker', img: logoDocker },
    { name: 'Dynamodb', img: logoDynamodb },
    { name: 'Elisp', img: logoElisp },
    { name: 'Elixir', img: logoElixir },
    { name: 'Emacs', img: logoEmacs },
    { name: 'Flask', img: logoFlask },
    { name: 'Foundation', img: logoFoundation },
    { name: 'Gatsby', img: logoGatsby },
    { name: 'Git', img: logoGit },
    { name: 'Github', img: logoGithub },
    { name: 'Gitlab', img: logoGitlab },
    { name: 'Google cloud', img: logoGooglecloud },
    { name: 'Grunt', img: logoGrunt },
    { name: 'Gulp', img: logoGulp },
    { name: 'Java', img: logoJava },
    { name: 'Javascript (es6)', img: logoJavascript },
    { name: 'Jira', img: logoJira },
    { name: 'Jquery', img: logoJquery },
    { name: 'Materialize', img: logoMaterialize },
    { name: 'Mongo', img: logoMongo },
    { name: 'Mysql', img: logoMysql },
    { name: 'Nginx', img: logoNginx },
    { name: 'Nikola', img: logoNikola },
    { name: 'Node', img: logoNode },
    { name: 'Php', img: logoPhp },
    { name: 'Postgresql', img: logoPostgresql },
    { name: 'Python', img: logoPython },
    { name: 'React native', img: logoReactNative },
    { name: 'React', img: logoReact },
    { name: 'Redhat', img: logoRedhat },
    { name: 'Redis', img: logoRedis },
    { name: 'Redux', img: logoRedux },
    { name: 'Ruby', img: logoRuby },
    { name: 'Quasar', img: logoQuasar },
    { name: 'Sass', img: logoSass },
    { name: 'Sqlite', img: logoSqlite },
    { name: 'Typescript', img: logoTypescript },
    { name: 'Ubuntu', img: logoUbuntu },
    { name: 'Vagrant', img: logoVagrant },
    { name: 'Vue', img: logoVue },
    { name: 'Webapck', img: logoWebpack },
  ]
  const icon = icons.filter(x => x.name === name)
  if (icon.length === 1) {
    return icon[0].img
  } else {
    return blank
  }
}


const renderRatingToText = level => {
  const down = 5 - level
  const up = level

  const downRender = Array.from(Array(down).keys()).map((down) => {
    return <span key={down}>☆</span>
  })

  const upRender = Array.from(Array(up).keys()).map((up) => {
    return <span key={up} className='has-text-danger'>☆</span>
  })

  return (
    <div className={css.rating}>
      {downRender}
      {upRender}
    </div>
  )
}



const CvPage = ({ data }) => {
  const cv = data.dataYaml
  console.log(cv)


  const skillR = cv.skills.map(({ title, details }, indexSkill) => {
    const columnSize = 2
    const maxColumnSize = 12
    const columnByRow = maxColumnSize / columnSize
    const rowSize = Math.ceil(details.length / columnByRow)

    const detailsWrapper = Array.from(Array(rowSize).keys()).map(rowIndex => {
      const detailSliced = details.slice(rowIndex * columnByRow, (rowIndex + 1) * columnByRow).map(({ name, level }) => {

        return (
          <div key={`${title}-${name}`}
               className={`${css.myTile} ${css.tile} ${css.is2} ${css.isChild}`}>
            <div className={`${css.myTileWrapper}`}>
              <h4 className="has-text-centered">
                {name}
              </h4>
              <figure className="has-text-centered">
                <img alt='' src={skillToImage(name)} />              
              </figure>
              <div className='has-text-centered'>
                <div >{renderRatingToText(level)}</div>
              </div>
            </div>
          </div>
        )
      })


      return (
        <div key={rowIndex} className={`${css.tile} ${css.isParent} ${css.myTileParent}`}>
          {detailSliced}
        </div>
      )
    })
    return (
      <div key={indexSkill}
           className={` ${css.myTileSkill} ${indexSkill % 2 ? css.myTileBackground1: css.myTileBackground2}`}>
        <h2 className="is-size-3 is-capitalized has-text-grey">{title}</h2>
        {detailsWrapper}
      </div>
    )
  })
  


  return (
    <Layout>
      <SEO title="Home" keywords={[`cv`, `curcium vitale`, `software developer`, `Vincent houba`, 'houba vincent']} />
      <div>
        <section className="hero">
          <div className="">
            <h2 className="is-size-2 is-capitalized">Skills</h2>
            <div>
              {skillR}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default CvPage

export const query = graphql`
  query TvQuery {
    dataYaml {
      name {
        first
        last
      }
      pseudo
      pdf
      src
      url
      social {
        github
        linkedin
      }
      style
      color
      color2
      order
      about
      skills {
        title
        details {
          name
          level
        }
      }
      education {
        school
        dates
        details
        degree
      }
      industry {
        place
        location
        title
        dates
        detail
        details {
          name
          items
        }
      }
      projects {
        website {
          name
          url
          details
        }
      }
    }
  }
`
