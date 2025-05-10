import React from 'react'
import {useNavigate} from 'react-router-dom'
const Usenavigate = () => {
    //make instance first
    const Navigate = useNavigate();
    // const handle = () => {
    //     let bool = true;
    //     if (bool) {
    //         Navigate('/home')
    //     } else {
    //     Navigate('/about')
    //     }
    // }
  return (
    <div>
        <h2>Usenavigate</h2>
        <button onClick={()=> Navigate('/home')}>Go to home page</button> <br></br>
        <button onClick={()=> Navigate('/about')}>Go to about page</button>
    </div>
  )
}

export default Usenavigate