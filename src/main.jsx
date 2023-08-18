import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </>,
)
