import React,{ useState} from 'react'

const PreviousState = () => {
    const [count, setcount] = useState(0);

    function updatecount () {
        // setcount (count + 1)

        //for prev state value 

        let randomvalue = Math.floor( Math.random()*10 );
        setcount ( (prev)=> {

        //     console.log(prev)
        //    return  count + 1;
        if ( prev + randomvalue > 5) {
            console.log(`Hello, ${randomvalue}`)
        }return randomvalue;
        
        })
    }
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={updatecount}>update</button>
    
    </>
  )
}

export default PreviousState