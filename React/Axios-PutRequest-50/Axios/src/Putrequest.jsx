import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Putrequest = () => {
  const [Post, Setpost] = useState({
    title: '',
    body: ''
  })

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=> {
      console.log(response.data)
    })
  }, [])

  let handleinput = (e) => {
   Setpost({
    ...Post,
    [e.target.name] : [e.target.value]
   })
  }

  const handlesubmit = (e)=>{
     e.preventDefault();
     axios.put('https://jsonplaceholder.typicode.com/posts/1', {Post}).then((response)=>{
      console.log(response)
     })
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input placeholder='name' name='title' onChange={handleinput}/>
        <input placeholder='description' name='body' onChange={handleinput}/>
          <button onClick={handlesubmit}>Submit</button>
      </form>
      
    </div>
  )
}

export default Putrequest