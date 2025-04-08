import React, { useEffect, useState } from 'react';

function useEffectConditional() {
    const [Count , Setcount ] = useState(0)
    const [Age , Setage] = useState(22)

    useEffect ( () => {
     console.log("useEffetct hook");
    }, [Count]); // now this call only for count 

    useEffect ( () => {
        console.log("useEffetct hook for age");
       }, [Age]); // now this call only for Age 
   

    return (
        <>
            <h1>Useeffect hook</h1>
            <h2>Count,{Count}</h2>
            <h2>Age, {Age}</h2>

            <button onClick={() => Setcount(Count +1)}>Count</button>
            <button onClick={() => Setage(Age + 1)} style={{margin: "10px"}}>Age</button>
        </>
    );
}

export default useEffectConditional;