import React, { useState, createContext } from "react";
import FirstComp from "./FirstComp";

export const Mydata = createContext();

const Contextapi = () => {
  const [Data, Setdata] = useState(1);
  const [Salary , SetSalary ] = useState(null)

  const Getsalary = (val) => {
    SetSalary(val);
  }

  return (
    <Mydata.Provider value={{ ValueData: Data, Getsalary: Getsalary}}>
      <h1>Context Api</h1>
      <h1>Salary , {Salary}</h1>
      <button onClick={() => Setdata(Data + 1)}>Data</button>
      <FirstComp />
    </Mydata.Provider>
  );
};

export default Contextapi;
