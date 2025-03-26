import React,{useState} from 'react';
function GetInputValue (){
    const [Data , Setdata] = useState(null);
    const [Print , setprint] = useState(false);

    let Getvalue = (val)=>{  
        //  console.log(val.target.value);
        Setdata(val.target.value)
        setprint(false)
    }
    return(
        <div>
            {
                Print ?  <h2>{Data}</h2> : null
            }

            {/* <h2>{Data}</h2> */}

            <input type="text"  onChange={Getvalue}/>
            <button onClick={()=> setprint(true)}>Click me</button>
        </div>
    )
}
export default GetInputValue;