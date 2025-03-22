
import { useState } from 'react'
import './App.css'
import Cards from './components/cards'
import Button from './components/button';

function App() {
  const [count , setcount] = useState(0);

  function handleclick(){
    setcount(count+1);
  }

  return (

    <div>

    <button onClick={handleclick} text="Click me">
      <h1>${count}</h1>
    </button>

    </div>
     

  
  )
}

export default App
