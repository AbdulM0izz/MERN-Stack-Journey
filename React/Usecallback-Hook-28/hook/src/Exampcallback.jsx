

import React, { memo } from 'react';

function Exampcallback (props) {

    console.log("Child comp");
    
    return (
        <>
            <h3>Items</h3>
            <h4> Data , {props.Item}</h4>
        </>
    );
}

export default memo(Exampcallback);