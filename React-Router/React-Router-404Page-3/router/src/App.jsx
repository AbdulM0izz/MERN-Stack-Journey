import './App.css'
import {BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import PageNotFound from './PageNotFound'

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
     {/* <Link to="/home">Home</Link><br></br>
     <Link to="/About">About</Link> */}

    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/*' element={<Navigate to='/Home' />}/>
      {/* <Route path='/*' element={<PageNotFound />}/>  */}
    </Routes>
    
    </BrowserRouter>
   
    </>
    
  )
}

export default App
/***
 * one method is use * in staric to show page not found
 * For redirecting import naviagte 
 */
