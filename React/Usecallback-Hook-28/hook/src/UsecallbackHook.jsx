import React, { useCallback, useState } from "react";
import Exampcallback from "./Exampcallback";

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(1);

    const newData = useCallback(() => {
        console.log("newData");
    }, [item]);

    return (
        <>
            <h1>useCallback Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>

            <Exampcallback item={item} data={newData} />

            <button onClick={() => setItem(item * 2)}>Multiply Item</button>
        </>
    );
};

export default UseCallbackHook;
