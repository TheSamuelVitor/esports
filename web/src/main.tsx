import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Button from './Button'

// turns the main div in a HTML Element
// each tag is a component
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Button />
  </React.StrictMode>
)
