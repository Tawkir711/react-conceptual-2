import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import myCreateRoute from './route/Route'

// const myCreateRoute = createBrowserRouter([
//   // {
//   //   path: '/',
//   //   element: <div>This is my first route</div>
//   // },
//   // {
//   //   path: '/products',
//   //   element: <div>This is my 2nd route</div>
//   // },
//   // {
//   //   path: '/about',
//   //   element: <div>This is my 3rd route</div>
//   // },
// ])

// const myCreateRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <section>
//       <div>this is the fixed item</div>
//       <Outlet></Outlet>
//     </section>,
//     children: [
//       {
//         path: '/',
//         element: <div>this is home route</div>
//       },
//       {
//         path: "/products",
//         element: <div>products page</div>
//       }
//     ]
    
//   }
// ])

// const myCreateRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: "/products",
//         element: <Products></Products>
//       }
//     ]
    
//   }
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>,
)
