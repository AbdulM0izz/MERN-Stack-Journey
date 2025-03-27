// top get the value of form import state
import React,{useState} from "react";
function FormHandling (){
    const [Name,Setname] = useState("")
    const [Option,Setoption] = useState("")
    const [Agree,Setagree] = useState(false)

    function GetFormData(e){
        e.preventDefault(); //stop default behaviour
        console.log(Name,Option,Agree);
        
    }
    //in inputfield this e is option send to function 
    return(
        <div>
            <h2>Form handling in react jS</h2>
    
            <form onSubmit={GetFormData}>
                <input type="text" placeholder="Enter Your name"  onChange={(e)=> Setname(e.target.value)}/>

                <br />
                <select onChange={(e)=> Setoption(e.target.value)}>
                    <option>Select any option</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>

                <br />
                 <input type="checkbox" onChange={(e)=> Setagree(e.target.checked)}/>

                 <br />

                 <button type="submit" >Submit</button>
            </form>

        </div>
    )
}
export default FormHandling