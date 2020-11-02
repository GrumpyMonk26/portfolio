import React from "react"
import { FaCode, FaDatabase, FaServer, } from "react-icons/fa"

export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Front-end Development",
    text: `
    HTML5, 
    CSS,
    Javascript, 
    Bootstrap, 
    Tailwind, 
    Gatsby, 
    React
    `,
  },
  {
    id: 2,
    icon: <FaDatabase className="service-icon" />,
    title: "Database",
    text: `MySQL, MongoDB`,
  },
  {
    id: 3,
    icon: <FaServer className="service-icon" />,
    title: "Deployment",
    text: `Netlify, Git, Github, CLI`,
  },
]
