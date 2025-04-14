import React from 'react'

let ArrayListing = () => {

  let Employe = ["Moiz", "Ali", "Huzaifa","Noor"];
  //iterate on array with map
  // Employe.map( (items) => {
  //   console.log("My name is ",items);
  // });

  // with for loop
  // for (let i=0; i<Employe.length; i++) {
  //   console.log("My name is ",Employe[i]);
  // }

  //arrys of object
  const Employeinfo = [
    {name:"Moiz",email:"abdulmoiz@gmail.com",contact:"20202"},
    {name:"ALi",email:"ALi@gmail.com",contact:"20"},
    {name:"Huz",email:"Hzu@gmail.com",contact:"2"}
  ]

    return (
        <>
        <h1>Array lisitng with map</h1>
        {/* {
            Employe.map ((items)=>{
               return(
                <h3>{items}</h3>
               )
            })
        } */}

        <table border={1}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
            </thead>
            <tbody>
            {
                Employeinfo.map ((emp)=>{
                    return(
                        <tr key={emp.email}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.contact}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>



        </>
    )
}

export default ArrayListing