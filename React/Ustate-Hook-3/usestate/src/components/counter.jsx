import React, { useState } from 'react'


const Counter = () => {
   const [count , setcount] = useState(0);
  return (
    <div className='countercontainer'>

        <p id='para'>You have clicked {count} times </p>
        <button id='button' onClick={()=>{setcount(count+1)}}>click Me</button>

    </div>
  )
}

export default Counter