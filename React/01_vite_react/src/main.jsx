import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const an = "bahaha"

const Elem = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  'click me to visit google',
  an
)

createRoot(document.getElementById('root')).render(
  Elem
)
// // later one overwrites the prior createRoot
// createRoot(document.getElementById('root')).render( // createRoot is under ReactDOM
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
