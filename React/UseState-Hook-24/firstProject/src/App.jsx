import React,{useState} from 'react'
import './App.css'
import useStateHook from './useStateHook'
function App() {
    
  const [name , setname] = useState("moiz")
  return (
    <>
        <useStateHook />
        <h3>{name}</h3>
        <button onClick={() => setname("Abdul Moiz")}>Change Name</button>
    </>
  )
}

export default App
