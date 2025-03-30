
import React,{ useState } from 'react'
import './App.css'
import Render from './Render'

function App() {
  const [data , setdata] = useState("green")
  return (
     <>
      <Render  color={data}/>
      <br />
      <button onClick={()=> setdata("Blue")}>Change Color</button>
      
     </>
  )
}

export default App
