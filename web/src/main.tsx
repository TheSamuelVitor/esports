import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// turns the main div in a HTML Element
// each tag is a component
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
