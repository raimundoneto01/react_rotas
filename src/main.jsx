import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Login } from './pages/Login.jsx';
import { Usuario } from './pages/Usuario.jsx';
import  { Cadastro } from './pages/Cadastro.jsx';
import { Menu } from './pages/Menu.jsx';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/usuario",
      element: <Usuario/>
    },
    {
      path: "/cadastro",
      element: <Cadastro/>
    },
    {
      path: "/menu",
      element: <Menu/>
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
   
)
