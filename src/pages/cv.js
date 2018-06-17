import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/css/cv.module.css'
import im from '../assets/images/ai-logo.png'
import blank from '../assets/images/blank.jpg'
import logoReact from '../assets/images/react-logo.png'


const skillToImage = (name) => {
  const icons = [
    { name: 'Python', img: im },
    { name: 'Javascript (es6)', img: im },
    { name: 'Elisp', img: im },
    { name: 'Node', img: im },
    { name: 'Ruby', img: im },
    { name: 'Elixir', img: im },
    { name: 'Php', img: im },
    { name: 'Java', img: im },
    { name: 'Clojure', img: im },
    { name: 'Typescript', img: im },
    { name: 'Django', img: im },
    { name: 'Flask', img: im },
    { name: 'Nikola', img: im },
    { name: 'Aiohttp', img: im },
    { name: 'React', img: logoReact },
    { name: 'Redux', img: im },
    { name: 'React native', img: im },
    { name: 'jquery', img: im },
    { name: 'Angular', img: im },
    { name: 'Css', img: im },
    { name: 'Sass', img: im },
    { name: 'Foundation', img: im },
    { name: 'Bootstrap', img: im },
    { name: 'Materialize', img: im },
    { name: 'Webapck', img: im },
    { name: 'Brunch', img: im },
    { name: 'Gulp', img: im },
    { name: 'Grunt', img: im },
    { name: 'Nginx', img: im },
    { name: 'Apache', img: im },
    { name: 'Postgresql', img: im },
    { name: 'Mysql', img: im },
    { name: 'Sqlite', img: im },
    { name: 'Mongo', img: im },
    { name: 'Redis', img: im },
    { name: 'Dynamodb', img: im },
    { name: 'Aws', img: im },
    { name: 'Google cloud', img: im },
    { name: 'Emacs', img: im },
    { name: 'Docker', img: im },
    { name: 'Vagrant', img: im },
    { name: 'Git', img: im },
    { name: 'Jira', img: im },
    { name: 'Github', img: im },
    { name: 'Gitlab', img: im },
    { name: 'Bitbucket', img: im },
    { name: 'Debian, ubuntu', img: im },
    { name: 'Arch linux', img: im },
    { name: 'Redhat', img: im },
  ]
  const icon = icons.filter((x) => x.name === name)
  if(icon.length == 1) {
    return icon[0].img
  } else {
    return blank
  }
}


const CvPage = ({ data }) => {
  const renderRatingToText = (level)  => {
    const down = 5 - level
    const up = level

    const downRender = Array.from(Array(down).keys()).map(() => {
      return <span>☆</span>
    })

    const upRender = Array.from(Array(up).keys()).map(() => {
      return (
        <span className={styles['up-rating']}>☆</span>
      )
    })

    return (
      <div className={styles['rating']}>
        {downRender}
        {upRender}
      </div>
    )
  }



  const cv = data.dataYaml
  const infoR = (
    <div>
      <div> {cv.url} </div>
      <div> {cv.src} </div>
      <div> {cv.pdf} </div>
    </div>
  )

  const socialR = (
    <div>
      <div> {cv.social.github} </div>
      <div> {cv.social.linkedin} </div>
    </div>
  )

  const skillR = cv.skills.map(({ title, details }) => {
    const detailsR = details.map(({ name, level }) => {
      return (
        <li className={styles['card']}>
          <div className={styles['card-top']}>
            {name}
          </div>
          <div className={styles['card-main']}>
            <img className={styles['item-image']} alt="" src={skillToImage(name)}/>
          </div>
          <div className={styles['card-bottom']}>
            <div className={styles['rating']}>
              {renderRatingToText(level)}
            </div>
          </div>
        </li>
      )
    })
    return (
      <div className={styles['card-wrapper']}>
        <h3>{title}</h3>
        <ul className={styles['ul-wrapper']}>{detailsR}</ul>
      </div>
    )
  })

  const educationR = cv.education.map(({school, dates, details}) => {
    const detailsR = details.map((item) => {
      return (
        <li>{item}</li>
      )
    })
    return (
      <div>
        <div>{school}</div>
        <div>{dates}</div>
        <ul>{detailsR}</ul>
      </div>
    )
  })

  return (
    <div>
      <div>
        {educationR}
        {skillR}
      </div>
    </div>
  )
}

export default CvPage

export const query = graphql`
  query CvQuery {
    dataYaml(id: { regex: "/cv.yaml/" }) {
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
