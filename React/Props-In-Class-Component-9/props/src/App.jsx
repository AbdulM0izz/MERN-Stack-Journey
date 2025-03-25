import PropsInClassComponent from "./PropsInClassComponent";
import React,{useState} from "react";


function App(){
  const [name,setname] = useState ("Moiz")
  return(
    <div>
      <PropsInClassComponent name={name}/>
      <button onClick={()=> setname("Abdul Moiz")}>Click me</button>

    </div>
  )
}
export default App;