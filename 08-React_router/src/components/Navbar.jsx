import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav'>
        <h2>React routers</h2>
        <div>
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"} >Contact</Link>
            <NavLink to="/products" className={({ isActive }) =>
  isActive ? "text-blue-500" : ""
}>
  Products
</NavLink>


        </div>
    </div>
  )
}
