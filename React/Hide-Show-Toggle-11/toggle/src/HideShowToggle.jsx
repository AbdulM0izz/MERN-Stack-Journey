
import  React,{useState}  from 'react'

let HideShowToggle = () => {
    const[result , setresult] = useState(true)
    return(
        <div>
            
            <h1>hello</h1>
            {
                result ? <h2>Hide This content</h2> : null
            }
            
              <button style={{margin: "20px"}} onClick={()=> setresult(false)}>Hide</button>
             <button onClick={()=> setresult(true)}>Show</button> 

             <button  onClick={()=> setresult(!result)} style={{margin: "20px"}}>Toggle</button>
 
               
             
        </div>
    )
}

export default HideShowToggle