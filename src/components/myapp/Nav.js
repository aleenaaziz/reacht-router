import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
     <header>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>about</NavLink></li>
            <li><NavLink to='/Index'>index</NavLink></li>
        </ul>
     </header>
    </div>
  )
}

export default Nav
