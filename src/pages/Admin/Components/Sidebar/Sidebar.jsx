import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import { LuLayoutDashboard, LuLayoutGrid  } from "react-icons/lu"

const LeftSidebar = () => {
  return (
    <aside className='min-vh-100 bg-light col-lg-2'>
      <div className="d-flex flex-column flex-shrink-0 p-3">      
        <ul className="nav nav-pills flex-column mb-auto">
          <li className='p-2'>
            <NavLink to='/manage'><LuLayoutDashboard /> Dashboard</NavLink>
          </li>
          <li className='p-2'>
          <NavLink to='/manage/products'><LuLayoutGrid /> Products</NavLink>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default LeftSidebar