import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactFragment from './ReactFragment'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ReactFragment /> 
  </StrictMode>
)
