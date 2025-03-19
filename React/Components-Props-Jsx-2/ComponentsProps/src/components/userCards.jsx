import React from 'react'


import './usercards.css'

const userCards = (props) => {
  return (
    <div className='usercontainer' style={props.style}>
        <p id='title'>{props.desc} {props.name} </p>
        <img id='userimg' src={props.img} alt="img" />
        <p id='userdesc'>Desc Of Moiz</p>

    </div>
  )
}

export default userCards