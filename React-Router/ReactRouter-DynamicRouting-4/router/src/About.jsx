import React from 'react'
import Link from 'react-router-dom'
const About = () => {
  return (
    <div>
        <h2>About</h2>
        <ul>
        <li><Link to="/Employe/Moiz">Moiz</Link></li>
        <li><Link to="/Employe/Ali">Ali</Link></li>
        </ul>
    </div>
  )
}

export default About