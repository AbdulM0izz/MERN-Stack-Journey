import React, { useState } from 'react'

const StateWithobj = () => {
  const [Info, Setinfo] = useState({ name: "Moiz", age: 19 })

  return (
    <>
      <h2>StateWith</h2>
      <h2>Name: {Info.name}</h2>
      <h2>Age: {Info.age}</h2>
      <input
        type="text"
        value={Info.name}
        onChange={(e) => Setinfo({...Info, name: e.target.value })}
      />
      <br/>
      <input 
      type='text'
      value={Info.age}
      onChange={(e)=> Setinfo(...Info, e.target.age)}
       />
    </>
  )
}

export default StateWithobj
