import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//gets the jsx code from App and convert it to html structure
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
