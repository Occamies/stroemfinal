import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <section className='nav-container'>
    <nav className='main-nav'>
      <ul>
        <li><NavLink to="/">Forside</NavLink></li>
        <li><NavLink to="/OmOs">Om os</NavLink></li>
        <li><NavLink to="/Services">Service</NavLink></li>
        <li><NavLink to="/FAQ">FAQ</NavLink></li>
        <li><NavLink to="/Nyheder">Nyheder</NavLink></li>
        <li><NavLink to="/Kontakt os">Kontakt os</NavLink></li>
      </ul>
    </nav >
    <div className="searchbar">
      <input type="text" />
    </div>
    </section>
  )
}

export default NavBar