import './App.css'
import {BrowserRouter, Route, Routes,Navigate} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import Search from './Search'
import Usenavigate from './Usenavigate'
import Uselocation from './Uselocation'
import NestedRouting from './NestedRouting'
import Student from './Student'
import Faculty from './Faculty'

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
      <Route path='/location' element={<Uselocation />}/>

      <Route path='/nestedrouting/' element={<NestedRouting />}>
       <Route path='student' element={<Student />}/>
       <Route path='faculty' element={<Faculty />}/>
      </Route>


    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
