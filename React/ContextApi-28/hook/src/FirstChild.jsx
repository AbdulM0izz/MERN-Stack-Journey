
import React,{ useContext } from 'react';
import { Mydata } from './ContextApi';

function FirstChild() {

    const {Valuedata} = useContext(Mydata);

    return (
        <>
            <h1>First child Value data , {Valuedata}</h1>
            <SecondChild />
        </>
    );
}
export default FirstChild;