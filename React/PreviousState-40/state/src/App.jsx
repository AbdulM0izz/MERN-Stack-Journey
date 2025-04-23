
import { useState } from 'react'
import './App.css'
import PreviousState from './PreviousState'

function App() {
  const [count, setcount] = useState(0)
  return (
    <>
    <PreviousState />
    </>
  )
}

export default App
