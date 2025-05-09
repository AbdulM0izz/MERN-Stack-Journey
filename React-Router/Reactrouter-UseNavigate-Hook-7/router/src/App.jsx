import './App.css'
import {BrowserRouter, Route, Routes,Navigate} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import Search from './Search'
import Usenavigate from './Usenavigate'
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Nav />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/About' element={<About />}/>
      <Route path='/usenavigate' element={<Usenavigate />}/>
      <Route path='*' element={<Navigate to="/home" />}/>
      <Route path='/search' element={<Search />}/>
    </Routes>
    
    </BrowserRouter>
   
    </>
    
  )
}

export default App
