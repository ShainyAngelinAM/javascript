import React from 'react'
import { Link, Outlet } from "react-router-dom";

function home() {
  return (
    <div>
        <h3> GOOD MORNING</h3>
        <nav>
          <ul>
          <li>
                <Link to="/home/feedback">FEEDBACK</Link>
            </li>
                
           </ul>     
            </nav>
            <Outlet />
    </div>
  )
}

export default home