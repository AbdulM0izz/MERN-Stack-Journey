import React from 'react'
import {useLocation} from 'react-router-dom'

const Uselocation = () => {
    const Location = useLocation();
    console.log(location)
  return (
    <>
     <span>Uselocation</span>
    </>
  )
}

export default Uselocation