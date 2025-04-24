import React,{useEffect, useRef} from 'react'

const PreviousProp = (prop) => {
    let random = useRef();

    useEffect(()=>{
        random.current = prop.data;
    })

    let Previous = random.current;
  return (
    <>
       <h2>PreviousProp</h2>
       <h3>Current: {prop.data}</h3>
       <h3>Previous: {Previous}</h3>
    </>
  )
}

export default PreviousProp