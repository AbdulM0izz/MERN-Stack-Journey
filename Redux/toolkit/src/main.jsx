import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider} from 'react-redux'
import Rootreducer from './Services/Reducers/Rootreducer.js'


const store = createStore(Rootreducer)
console.log("store data",store)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>,
)
