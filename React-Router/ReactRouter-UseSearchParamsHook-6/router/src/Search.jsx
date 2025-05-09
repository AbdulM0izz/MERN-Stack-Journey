import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Search = () => {
    const [searchparams, setparams] = useSearchParams();
    const myname = searchparams.get('name');
    const myage = searchparams.get('age')
  return (
    <div>
        <h1>Search</h1>
        <h2>My name is, {myname} and age is {myage}</h2>
        <input type='text' placeholder='query' onChange={(e)=> setparams({name: e.target.value, age: 20})} />
        <button onClick={()=> setparams({name:'Moiz',age: 20})}>Set Query</button>

    </div>
    
  )
}

export default Search
