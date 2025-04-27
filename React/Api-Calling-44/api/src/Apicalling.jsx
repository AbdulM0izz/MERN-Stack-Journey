import React, { useEffect, useState } from 'react'

const Apicalling = () => {
    const [data, setdata] = useState([])
    useEffect (()=>{
        fetch("https//jsonplaceholder.com/user").then((response)=>{
            response.json().then((data)=>{
                // console.log(data)
                setdata(data);
            })
        })
    },[]); // blank array for call one time for array 
  return (
    <>
        <h2>Apicalling</h2>
        <table border={1}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>User</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,i)=>{
                     <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                    </tr>
                    })
                }
            </tbody>

        </table>
    </>
  )
}

export default Apicalling