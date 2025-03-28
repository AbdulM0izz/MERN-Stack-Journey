import React, {useState} from 'react'
let ConditionalRendering = () =>{
     const [Vote , Setvote] = useState(true)
     const [Age , Setage] = useState(22)
//this syntax of is else is not good practice to use 
    //  if(Vote){
    //     return(
    //         <div>
    //             <h1>Can vote</h1>
        
    //         </div>
    //     )
    //  }
    //  else{
    //     return(
    //         <h2>Cannot  Vote</h2>
    //     )
    //  }

    //Short Circuting or logical & check only one condition true

    // return(
    //     <div>
    //         {
    //             Vote && <h1>Can Vote</h1>
    //         }
    //     </div>
    // )


    //This is good practice turnary operator 

    return (
        <div>
            {
            //  Age > 18 ? <h1>Age is greater then 18</h1> : <h1>Not greater then 18</h1>

            Age == 10 ?<h1>you are kid</h1> : Age == 19 ? <h1>Young</h1> : <h1>You are greater then 20</h1>
            
            }
        </div>
    )
   
}

export default ConditionalRendering