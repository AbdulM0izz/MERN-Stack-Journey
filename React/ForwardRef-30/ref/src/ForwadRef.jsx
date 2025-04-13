import React,{ useRef} from "react"
import ChildForwardref from "./ChildForwardref"

let forward = () => {
    let Myref = useRef();
    function Updateinput () {
       Myref.current.value = "Moiz"
       Myref.current.style.background = "red"
       Myref.current.style.color = "white"
       Myref.current.focus();
    }
    return (
        <>
        <h1>Forward Ref </h1>
        <ChildForwardref ref={Myref}/>
        <button onClick={()=> Updateinput()}>Click</button>
        </>
    )
}
export default forward   