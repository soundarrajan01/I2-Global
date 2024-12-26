import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Screens/AuthScreen/Login'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import AuthLayOuts from './Layouts/AuthLayOuts'
import SignUp from './Screens/AuthScreen/SignUp'
import DashboardLayOut from './Layouts/DashboardLayOut'
import Dashboard from './Screens/MainScreen/Dashboard'
import { AuthPrivateRoute, DashboardPrivateRoute } from './Route/PrivateRoute'
import Account from './Screens/MainScreen/Account'
import Notes from './Screens/MainScreen/Notes'

function App() {
 
const router =createBrowserRouter([
  {
    element:<AuthLayOuts/>,
    children:[
    {  element:<AuthPrivateRoute/>,
      children:[
      
        {
          
            index:true,
            path:'/',
            element:<Login/>
          
        },
        {
          path:'signup',
          element:<SignUp/>
        }
      ]
    }
    ]
   
  }
  ,
  {
    element:<DashboardLayOut/>,
    children:[
      {
        element:<DashboardPrivateRoute/>,
        children:[
          {
              path:'/dashboard',
              element:<Dashboard/>
            
          },
          {
            path:'/account',
            element:<Account/>
          },
          {
            path:'/notes',
            element:<Notes/>
          }
         
        ]
      }
    ]
   
  }
 
])
  return (
    <div>
   <RouterProvider router={router}/>
    
    </div>
    
  )
}

export default App
