
import React, { useRef, useEffect } from 'react'

const UserefHook = () => {
    let Myref = useRef();

    function Modfifyinput () {
        console.log(Myref.current.value);
        Myref.current.style.display = "none";
    }
    useEffect( ()=> {
        console.log(Myref.current.value = "Enter yout name");
        console.log(Myref.current.value);
    })

  return (
    <>
        <h1>Use Ref hook</h1>
        <input type="text" ref={Myref}/>
        <button onClick={()=> Modfifyinput()}>Click</button>

    </>
  )
}

export default UserefHook