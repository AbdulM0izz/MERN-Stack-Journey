import React, { useState, createContext } from 'react';
import FirstChild from './FirstChild';

// Create context
export const Mydata = createContext();

const ContextApi = () => {
  const [Data, Setdata] = useState(1);

  return (
    <Mydata.Provider value={{ Valuedata: Data }}>
      <div>

        <h2>Context API with Hook</h2>
        <button onClick={() => Setdata(Data + 1)}>Update Data</button>
        <FirstChild />

      </div>
    </Mydata.Provider>
  )
}

export default ContextApi;
