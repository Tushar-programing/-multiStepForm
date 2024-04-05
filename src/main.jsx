import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import First from './page/first.jsx'
import Second from './page/second.jsx'
import Third from './page/third.jsx'
import Fourth from './page/fourth.jsx'
import Fifth from './page/fifth.jsx'
import Sixth from './page/sixth.jsx'
import Seventh from './page/seventh.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <First />
      },
      {
        path: '/interest',
        element: <Second />
      },
      {
        path: '/place',
        element: <Third />
      },
      {
        path: '/level',
        element: <Fourth />
      },
      {
        path: '/onway',
        element: <Fifth />
      },
      {
        path: '/load',
        element: <Sixth />
      },
      {
        path: '/answer',
        element: <Seventh />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
