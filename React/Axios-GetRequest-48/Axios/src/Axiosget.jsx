import React from 'react'
import Axios from 'axios'
import axios from 'axios'

const Axiosget = () => {
  
  const Getdata = ()=> {
    const Url = 'https://dummyjson.com/test'
    axios(Url).then((response)=> {
      console.log(response)
    })

  }
  return (
    <div>
      <h2>Axiosget</h2>
      <button onClick={Getdata}>click</button>
    </div>
  )
}

export default Axiosget