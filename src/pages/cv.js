import React from 'react'
import Link from 'gatsby-link'

const CvPage = ({ data }) => {
  console.log(data)
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
        <div>
          <div>{name}</div>
          <div>{level}</div>
        </div>
      )
    })
    return (
      <div>
        <div>{title}</div>
        <div>{detailsR}</div>
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
