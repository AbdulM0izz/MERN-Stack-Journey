import React, { useEffect } from "react";

let useEffectprop = (props) => {

    useEffect ( () => {
      console.log("UseEffect hook",props);
    });

    return (
        <>
           <h1>UseEffect conditional hook</h1>
           <h2>{props.data}</h2>
           
        </>
    )
}
export default useEffectprop;