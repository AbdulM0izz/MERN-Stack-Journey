import { useState } from "react";
import React,{ useEffect }from "react"

let UseEffect = () => {

    useEffect (() =>{
      console.log("UseEffect hook");
    });

    const [Name , Setname] = useState("MOiz")

    return (
        <>
        <h1>Use Effect hook</h1>
        <h3>{Name}</h3>
        <button onClick={() => Setname("Abdul Moiz")}>Chnage name</button>
        </>
    )
}
export default UseEffect