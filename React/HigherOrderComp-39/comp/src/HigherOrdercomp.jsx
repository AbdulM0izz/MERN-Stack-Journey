import React, { useState } from 'react'

const HigherOrdercomp = () => {
    const [count, setcount] = useState(0);
    let increment = () =>{
        setcount (count + 1);
    }
  return (
    <>
        <h2>Count , {count}</h2>
        <button onClick={increment}>Update count</button>
    </>
  )
}

export default HigherOrdercomp