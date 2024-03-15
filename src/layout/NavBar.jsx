import { FiMenu } from 'react-icons/fi'
import React, { useEffect, useState } from "react"
import useRequestData from "../hooks/useRequestData"
import { NavLink } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const NavBar = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu)
  };

  return (
    <section className='nav-container'>
      <nav className='main-nav'>
        <div className="burger-menu" onClick={toggleMenu}>
          <FiMenu />
        </div>
        <ul className={`menu-links ${showMenu ? "active" : ""}`}>
          <li><NavLink to="/">Forside</NavLink></li>
          <li><NavLink to="/OmOs">Om os</NavLink></li>
          <li><NavLink to="/Services">Service</NavLink></li>
          <li><NavLink to="/FAQ">FAQ</NavLink></li>
          <li><NavLink to="/News">Nyheder</NavLink></li>
          <li><NavLink to="/Kontakt os">Kontakt os</NavLink></li>
        </ul>
      </nav>
      <div className="searchbar">

        <SearchBar />

      </div>
    </section>
  )
}

export default NavBar