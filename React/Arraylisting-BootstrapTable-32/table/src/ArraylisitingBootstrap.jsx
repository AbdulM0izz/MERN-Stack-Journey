
import React from 'react'
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const ArraylisitingBootstrap = () => {
    const Employeinfo = [
        {name:"Moiz",email:"abdulmoiz@gmail.com",contact:"20202"},
        {name:"ALi",email:"ALi@gmail.com",contact:"20"},
        {name:"Huz",email:"Hzu@gmail.com",contact:"2"}
      ]
  return (
    <>
     <h1>Bootstrap Table</h1>
     {/* <Button variant="success" onClick={()=> alert("Bootstrap Button")}>Success</Button> */}
     <Table variant='dark' striped bordered hover>
        <tbody >
        {
            Employeinfo.map((item)=>{
                return(
                    item.name === "Moiz" ?
               <tr key={item.email}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                </tr> : null
            
                )
            })
        }
        </tbody>
        
     </Table>
    </>
  )
}

export default ArraylisitingBootstrap