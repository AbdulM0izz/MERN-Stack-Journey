import React from 'react'
import useCount from './Usecount'

const Customhook = () => {
    // const [Count, Setcount] = useState(0)
    // let increment = ()=>{
    //   Setcount(Count+1)
    // }
    // let decrement = ()=>{
    //     Setcount(Count-1)
    // }
    const [Count, increment, decrement] = useCount(0);
  return (
    <>
        <h2>count: {Count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </>
  )
}

export default Customhook
/**
 * custom means make own hook
 * if want to add same logic in any new component there we use custom hook
 * higher order component is lenthy so we use custom hook
 * If we want to add complete functionality to any component like login auth for that we use higher order component
 * if we want simple task api fetch data for that we use custom hook
 */