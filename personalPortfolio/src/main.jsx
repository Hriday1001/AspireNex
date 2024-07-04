import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import components from './components/index.js'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <components.Home/>
      },
      {
        path : "about",
        element : <components.About/>
      },
      {
        path : "contact",
        element : <components.Contact/>
      },
      {
        path : "skills",
        element : <components.Skills/>
      },
      {
        path : "projects/:projectid",
        element : <components.Projects/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
