import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <section className='nav-container'>
    <nav className='main-nav'>
      <ul>
        <li><NavLink>Forside</NavLink></li>
        <li><NavLink>Om os</NavLink></li>
        <li><NavLink>Service</NavLink></li>
        <li><NavLink>FAQ</NavLink></li>
        <li><NavLink>Nyheder</NavLink></li>
        <li><NavLink>Kontakt os</NavLink></li>
      </ul>
    </nav >
    <div className="searchbar">
      <input type="text" />
    </div>
    </section>
  )
}

export default NavBar