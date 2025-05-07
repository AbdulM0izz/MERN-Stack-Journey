import React from 'react'
import { Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
    </ul>
    </>
  )
}

export default Nav