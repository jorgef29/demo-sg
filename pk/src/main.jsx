import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ListarProductos from './Componentes/ListarProductos.jsx'
import ListarDepositos from './Componentes/ListarDepositos.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListarDepositos />
  </React.StrictMode>,
)
