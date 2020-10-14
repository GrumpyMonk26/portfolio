import React from "react"
import {
  FaLinkedin,
  FaTwitterSquare,
  FaDev,
  FaGithub,
  
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaDev className="social-icon"></FaDev>,
    url: "https://www.twitter.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
