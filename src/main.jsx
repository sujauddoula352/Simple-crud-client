import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import User from './Component/User';
import Update from './Component/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/users',
    loader: () => fetch('http://localhost:5000/users'),
    element: <User></User>
  },
  {
    path: '/update/:id',
    loader: ({ params}) => fetch(`http://localhost:5000/users/${params.id}`),
    element: <Update></Update>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
