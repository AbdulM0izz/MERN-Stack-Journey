import React, { useState } from 'react'

const ControlledComp = () => {
    const [item,setitem] = useState("")
  return (
    <>
        <h2>Controlled Comp</h2>
        <input type="text" value={item} onChange={(e)=> setitem(e.target.value)} />
        <h1>Value:  {item}</h1>
    </>
  )
}

export default ControlledComp