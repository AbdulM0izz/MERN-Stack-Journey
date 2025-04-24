import { useState } from 'react'
import './App.css'
import PreviousProp from './PreviousProp'

function App() {
  function updatedata () {
    // setcount (count + 1);
    let randomvalue = Math.floor(Math.random()*20);
    setcount (randomvalue)
  }
  const [count, setcount] = useState(0);

  return (
    <>
    <PreviousProp data={count} />
    <button onClick={updatedata}>Click</button>
    </>
  )
}

export default App
