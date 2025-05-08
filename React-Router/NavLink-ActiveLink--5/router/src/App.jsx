import './App.css'
import {BrowserRouter, Route, Routes,Navigate} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Nav />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/About' element={<About />}/>
      <Route path='*' element={<Navigate to="/home" />}/>
    </Routes>
    
    </BrowserRouter>
   
    </>
    
  )
}

export default App
