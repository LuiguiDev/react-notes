import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './Context/filters'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Here we create a global state by the context provider
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
