import React from 'react'
import Employe from './Employe'
// now if need to create fun in employe comp dont create there create in parent comp

const ReuseComp = () => {
    const Employeinfo = [
        {name:"Moiz",email:"abdulmoiz@gmail.com",contact:"20202"},
        {name:"ALi",email:"ALi@gmail.com",contact:"20"},
        {name:"Huz",email:"Hzu@gmail.com",contact:"2"}
      ]
  return (
    <>
    <h2>Reuse in react</h2>
    {
        Employeinfo.map((item, i)=>{
            return(
                <Employe data={item} key={i}/>
            )
        })
    }
    </>
  )
}

export default ReuseComp