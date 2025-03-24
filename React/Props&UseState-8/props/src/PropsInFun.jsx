import React from 'react'
function PropsInFun(props){
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <h2>Email: {props.email}</h2>
            <h4>info: {props.info.salary} Mobile: {props.info.mobile}</h4>

        </div>
    )

}
export default PropsInFun;