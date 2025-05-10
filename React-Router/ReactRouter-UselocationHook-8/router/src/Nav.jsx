import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    /**
     * style={({isactive})=> {return {backgroundColor: isactive ? 'aqua' : 'yellow'}}} 
     */
    <div>
        <ul className='nav'> 
            <li><NavLink className='nav-link' to="/home" >Home</NavLink></li>
            <li><NavLink className='nav-link'to="/About">About</NavLink></li>
            <li><NavLink className='nav-link'to="/search">Search</NavLink></li>
            <li><NavLink className='nav-link'to="/usenavigate">Usenavigate</NavLink></li>
            <li><NavLink className='nav-link'to="/location">Use-Location</NavLink></li>
        </ul>
    </div>
  )
}

export default Nav