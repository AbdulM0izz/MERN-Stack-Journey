import React from 'react'
import Firstchild from './Firstchild'

const Liftingstateup = () => {
  let User = "Moiz"
  function sayhello (val) {
    alert(val)
  }
  return (
    <>
    <h2>Lifting state up</h2>
    <Firstchild name={User} alarm={sayhello}/>

    </>
  )
}

export default Liftingstateup