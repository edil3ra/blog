import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql} from "gatsby"
import style from '../assets/css/cv.module.sass'

import blank from '../assets/images/blank.jpg'
import logoAiohttp from '../assets/images/aiohttp-logo.png'
import logoAngular from '../assets/images/angular-logo.png'
import logoApache from '../assets/images/apache-logo.jpg'
import logoArch from '../assets/images/archlinux-logo.jpg'
import logoAws from '../assets/images/aws-logo.png'
import logoBitbucket from '../assets/images/bitbucket-logo.jpeg'
import logoBootstrap from '../assets/images/bootstrap-logo.jpg'
import logoBrunch from '../assets/images/brunch-logo.png'
import logoClojure from '../assets/images/clojure-logo.png'
import logoCss from '../assets/images/css3-logo.png'
import logoDebian from '../assets/images/debian-logo.jpg'
import logoDjango from '../assets/images/django-logo.png'
import logoDocker from '../assets/images/docker-logo.png'
import logoDynamodb from '../assets/images/dynamodb-logo.jpg'
import logoElisp from '../assets/images/lisp-logo.png'
import logoElixir from '../assets/images/elixir-logo.png'
import logoEmacs from '../assets/images/emacs-logo.png'
import logoFlask from '../assets/images/flask-logo.jpg'
import logoFoundation from '../assets/images/foundation-logo.png'
import logoGatsby from '../assets/images/gatsby-logo.png'
import logoGit from '../assets/images/git-logo.png'
import logoGithub from '../assets/images/github-logo.png'
import logoGitlab from '../assets/images/gitlab-logo.png'
import logoGooglecloud from '../assets/images/googlecloud-logo.jpg'
import logoGrunt from '../assets/images/grunt-logo.png'
import logoGulp from '../assets/images/gulp-logo.png'
import logoJava from '../assets/images/java-logo.png'
import logoJavascript from '../assets/images/javascript-logo.png'
import logoJira from '../assets/images/jira-logo.png'
import logoJquery from '../assets/images/jquery-logo.gif'
import logoMaterialize from '../assets/images/materialize-logo.png'
import logoMongo from '../assets/images/mongo-logo.png'
import logoMysql from '../assets/images/mysql-logo.png'
import logoNginx from '../assets/images/nginx-logo.png'
import logoNikola from '../assets/images/nikola-logo.png'
import logoNode from '../assets/images/nodejs-logo.jpg'
import logoPhp from '../assets/images/php-logo.png'
import logoPostgresql from '../assets/images/postgresql-logo.png'
import logoPython from '../assets/images/python-logo.png'
import logoReact from '../assets/images/react-logo.png'
import logoReactNative from '../assets/images/react-native-logo.png'
import logoRedhat from '../assets/images/redhat-logo.png'
import logoRedis from '../assets/images/redis-logo.png'
import logoRedux from '../assets/images/redux-logo.png'
import logoRuby from '../assets/images/ruby-logo.png'
import logoSass from '../assets/images/sass-logo.png'
import logoSqlite from '../assets/images/sqlite-logo.jpeg'
import logoTypescript from '../assets/images/typescript-logo.png'
import logoUbuntu from '../assets/images/ubuntu-logo.jpg'
import logoVagrant from '../assets/images/vagrant-logo.png'
import logoWebpack from '../assets/images/webpack-logo.png'
import logoVue from '../assets/images/vue-logo.png'
import logoQuasar from '../assets/images/quasar-logo.png'

window.style = style

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

const CvPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`cv`, `curcium vitale`, `software developer`, `Vincent houba`, 'houba vincent']} />
      <section className={`${style.hero} ${style.isPrimary}`}>
        <div className={style.heroBody}>
          <div className={style.container}>
            <h1 className={style.title}>
              Primary title
            </h1>
            <h2 className={style.subtitle}>
              Primary subtitle
            </h2>
          </div>
        </div>
      </section>

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
