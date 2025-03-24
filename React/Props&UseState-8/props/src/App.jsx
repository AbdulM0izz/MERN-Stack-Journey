import React,{ useState } from "react";
import PropsInFun from "./PropsInFun";

function App(){
  const [firstname, setname] = useState("Moiz");
  const [mail , setmail] = useState("abdul@gmail.com");

  function Updatemail(){
    setmail("abdulmoiz@gamil.com");
  }
  function updatename(){
    setname("ali")
  }
  return(
    <div>

      <PropsInFun name={firstname} email={mail} info={{salary:60, mobile: "2723"}}/>
      <button onClick={()=>{updatename(); Updatemail();}}>Click ME</button>
      
      {/* <PropsInFun name={"Ali"} email={"Ali@gmail.com"} info={{salary:70, mobile: "000"}}/> */}

    </div>
  )
}
export default App;