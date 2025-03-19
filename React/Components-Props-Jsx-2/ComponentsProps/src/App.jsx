import UserCards from './components/userCards'
import Peaky2 from "./assets/peaky2.jpg";
import Peaky from "./assets/peaky.jpg";
import './App.css'


function App() {

  return (

      <div className='container'>
          <UserCards desc="desc1"
           img={Peaky}
           style={{"border-radius":"20px"}} 
          />

         <UserCards desc="desc2" name="ali"
          img={Peaky2}
          style={{"border-radius":"20px"}} 
         />

          <UserCards desc="desc3"
          style={{"border-radius":"20px"}} 
          img={Peaky}
           />
      </div>
      
  
    
   
  )
}

export default App
