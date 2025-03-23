import React,{ useState } from "react";

//using usestate we can update value and component will rerender with varible it will not re render

function StateinFunctionalComp(){

  const [name,setname] = useState(0);
  function newname(){
    setname(name+1);
  }
  
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={newname}>Click Me</button>
        </div>
    )

}
export default StateinFunctionalComp;