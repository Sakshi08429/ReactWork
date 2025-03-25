import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import './App.css'
import DashBoard from './Components/DashBoard'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Param from './Components/Param'
import Marks from './Components/Marks'
import Report from './Components/Report'
import Analysis from './Components/Analysis'

const router=createBrowserRouter([
  { path:"/",
    element:<div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:"/about",
    element:<div>
    <Navbar/>
    <About/>

  </div>
    
  },{
    path:"/dashboard",
    element:
    <div>
      <Navbar/>
     
      <DashBoard/>
    </div>,
    children:[{
      path:"/dashboard/report",
      element:<Report/>
    },
    {
      path:"/dashboard/marks",
      element:<Marks/>
    },{
      path:"/dashboard/analysis",
      element:<Analysis/>
    }
  
  
  ]
  },
  {
    path:"/student/:id",
    element:
    <div>
      <Navbar/>
        <Param/>
      
    </div>

  }
])

function App() {


  return (
    <>
   
     <RouterProvider router ={router}/>
      
    </>
  )
}

export default App
