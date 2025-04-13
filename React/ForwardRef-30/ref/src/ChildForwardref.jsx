import React,{ forwardRef } from 'react'

const ChildForwardref = (props , ref) => {
  return (
    <>
        <span>child Forward Ref</span>
        <br />
        <input type="text" ref={ref}/>
    </>
  )
}

export default forwardRef( ChildForwardref )