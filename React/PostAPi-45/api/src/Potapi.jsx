import React, { useState } from 'react'

const Potapi = () => {
    const [name,setname] = useState('')
    const [age,setage] = useState('')
    const [salary,setsalary] = useState('')

    let submitfrom = () =>{
        // console.log({name , age , salary})
        let data = {name , age , salary}
        fetch ("https://dummy.restapiexample.com/api/v1/create" , {
            method : "POST",
            headers : {
                'Accept': 'application/json',
                'Content-type':'application/json' 
            },
            body: JSON.stringify()
        }).then((result)=>{
            console.log(result)
        })

    }
  return (
    <>
        <h2>Potapi</h2>
        <input type='text' placeholder='enter text' value={name} onChange={(e)=> setname(e.target.value)} /><br></br>

        <input type='number' placeholder='enter age' value={age} onChange={(e)=> setage(e.target.value)}/><br></br>

        <input type='number' placeholder='enter salary' value={salary}  onChange={(e)=> setsalary(e.target.value)}/><br></br>

        <button onClick={submitfrom}>Submit</button>
    </>
  )
}

export default Potapi