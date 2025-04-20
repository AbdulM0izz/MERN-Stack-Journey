import React from 'react'
import {useRef} from 'react'

const UncontrolledComp = () => {
    let myref = useRef();
    let value = document.getElementById('myval').value;
    const Myform = (e) =>{ 
        e.preventDefault();
        alert("First " + myref.current.value)
    }
  return (
    <>
    <h2>Uncontrolled comp</h2>
    
    <form onSubmit={Myform}>
        <input type="text" ref={myref}/>
        <button>Submit</button>
    </form>
    </>
  )
}

export default UncontrolledComp