import React, { useState , useMemo} from "react"


const UsememoHook = () => {

    const [Count , SetCount ] =  useState(0);
    const [Age , SetAge ] = useState(2);
    

    const Multiply = useMemo(function Multi () {
        console.log("Multi fun");
        return Count * 2;
    },[Count]);

  
    return (
        <>
          <h1>UseMemo hook</h1>

          <h3> Count , {Count}</h3>
          <button onClick={ ()=> SetCount(Count + 2)}>Count</button>

          <h3>{Multiply}</h3>

          <h3>Age, {Age}</h3>
          <button onClick={ ()=> SetAge(Age + 1)}>Count</button>


        </>
    )
}

export default UsememoHook