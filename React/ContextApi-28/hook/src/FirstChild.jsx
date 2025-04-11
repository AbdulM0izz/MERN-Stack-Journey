import React, { useContext } from "react";
import { Mydata } from "./ContetApi"; 
import SecondComp from "./SecondComp";

const FirstComp = () => {
    const { ValueData } = useContext(Mydata); 
    return (
        <>
            <h1>First Comp, {ValueData}</h1>
            <SecondComp />
        </>
    );
};

export default FirstComp;
