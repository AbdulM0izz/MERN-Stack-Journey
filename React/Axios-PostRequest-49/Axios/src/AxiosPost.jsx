import React, { useState } from 'react'
import axios from 'axios'
const AxiosPost = () => {
  const [Post, Setpost] = useState({
    title: '',
    body: ''
  })
  let handleinput = (e) => {
    Setpost({
      ...Post,
      [e.target.name]: e.target.value
    });
  }

  let handlesubmit = (e)=> {
    e.preventDefault();
    const url = 'https://jsonplaceholder.typicode.com/posts'
    axios.post(url , {Post}).then((response)=> {
      console.log(response)
    })

  }

  return (
    <>
      <h2>AxiosPost</h2>
      <form onSubmit={handlesubmit}>
        <input type='text' name='title' placeholder='enter title'onChange={handleinput}/> <br></br>
        <input type='text' name='body' placeholder='enter desc'onChange={handleinput}/> 
        <button onClick={handlesubmit}>Submit</button>
      </form>
    </>
  )
}

export default AxiosPost
