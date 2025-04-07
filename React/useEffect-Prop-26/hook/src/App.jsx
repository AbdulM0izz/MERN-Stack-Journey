
import { useState } from 'react'
import './App.css'
import UseEffectprop from './useEffectprop'

function App() {
  const [Count , Setcount] = useState(1)
  return (
    <>
     <UseEffectprop  data={Count}/>
     <button onClick={() => Setcount(Count + 1)}>Click</button>
    </>
  )
}

export default App
