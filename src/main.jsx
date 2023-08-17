import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Login } from './pages/Login.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/login",
      element: <Login/>
     
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
   
)