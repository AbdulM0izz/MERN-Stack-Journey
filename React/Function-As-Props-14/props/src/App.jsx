
import './App.css'
import FunctionAsProps from './FunctionAsProps'
import New from './newcomp' 
function App() {
  function getdata(){
    alert("Hello from App.js")
  }

  return (
      <div>
        <FunctionAsProps data={getdata}/>
        <New data={getdata}/>
      </div>
  )
}

export default App
