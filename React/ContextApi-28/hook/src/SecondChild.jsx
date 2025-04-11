import React,{useContext} from 'react';
import { Mydata } from './ContextApi';

function SecondChild() {

      const {Valuedata} = useContext(Mydata);
  
  return (
      <>
    <h1>Second Child data , {Valuedata} </h1>
            
      </>
      
  );
}
export default SecondChild;