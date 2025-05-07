import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
     {/* <Link to="/home">Home</Link><br></br>
     <Link to="/About">About</Link> */}

    <Routes>
      <Route path='/Nav' element={<Nav />} />
    </Routes>
    
    </BrowserRouter>
   
    </>
    
  )
}

export default App
