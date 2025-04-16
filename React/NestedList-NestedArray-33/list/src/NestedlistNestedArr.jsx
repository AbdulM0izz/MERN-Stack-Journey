
import React from 'react'
import {Table} from 'react-bootstrap/Table';


const NestedlistNestedArr = () => {
  const Employeinfo = [
    {name:"Moiz",email:"abdulmoiz@gmail.com",Address: [
      {House :"20", City:"Karchi",Country: "Pakistan"},
      {House:"40", City:"Delhi",Country: "India"}
    ]},
    {name:"ALi",email:"ALi@gmail.com",Address: [
      {House :"20", City:"Karchi",Country: "Pakistan"},
      {House:"40", City:"Delhi",Country: "India"}
    ]},
    {name:"Huz",email:"Hzu@gmail.com",Address: [
      {House :"20", City:"Karchi",Country: "Pakistan"},
      {House:"40", City:"Delhi",Country: "India"}
    ]}
  ]
  return (
    <>
      <h3>NestedlistNestedArr</h3>
      <table dark striped>
          <thead>
            <tr>
              <td>Name</td>
              <td>City</td>
              <td>Address</td>
            </tr>
          </thead>

          <tbody>
           {
            Employeinfo.map((item , i)=>{
              return(
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  {
                    item.Address.map((data, i)=>{
                      return(
                        <tr key={i}>
                            <td>{data.House}</td>
                            <td>{data.City}</td>
                            <td>{data.Country}</td>
                        </tr>
                      )
                    })
                  }
                </tr>
              )
            })
           }
          </tbody>
      </table>
      
    </>
  )
}

export default NestedlistNestedArr