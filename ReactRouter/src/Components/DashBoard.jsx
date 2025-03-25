import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function DashBoard() {
  return (
    <div>
      DashBoard Page
      <Link to="/dashboard/analysis">Analysis</Link> 
      <Link to="/dashboard/report">Report</Link> 
      <Link to="/dashboard/Marks">Marks</Link> 
      <Outlet/>
    </div>
  )
}

export default DashBoard
