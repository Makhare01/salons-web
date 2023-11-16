import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/fonts.css'

import { App } from './app'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
