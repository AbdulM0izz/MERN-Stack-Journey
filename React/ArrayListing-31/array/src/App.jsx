
import './App.css'
import ArrayListing from './ArrayListing'

function App() {

  let Employe = ["Moiz", "Ali", "Huzaifa","Noor"];
  //iterate on array with map
  // Employe.map( (items) => {
  //   console.log("My name is ",items);
  // });

  // with for loop
  // for (let i=0; i<Employe.length; i++) {
  //   console.log("My name is ",Employe[i]);
  // }

  return (
    <>
    <ArrayListing />
    {
      Employe.map ( (item)=>{
        <h3>{item}</h3>
      })
    }
    </>
  )
}

export default App
