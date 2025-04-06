import React,{useState} from 'react'
function useStateHook () {
        
  const [name , setname] = useState("moiz")
    return (
        <>
        <h1>hook</h1>
        <h3>{name}</h3>
        <button onClick={() => setname("Abdul Moiz")}>Change Name</button>
        </>
    )
}
export default useStateHook