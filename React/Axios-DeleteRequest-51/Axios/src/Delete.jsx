import React,{useEffect} from 'react'
import axios from 'axios'

const Delete = () => {
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=> {
          console.log(response.data)
        })
      }, [])
      
      const deleterecord = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1').then((data)=>{
            alert("Deleted")
            console.log("data", data)
        })
      }
  return (
    <>
       <h2>Delete</h2>
       <button onClick={deleterecord}>Delete</button>
    </>
  )
}

export default Delete