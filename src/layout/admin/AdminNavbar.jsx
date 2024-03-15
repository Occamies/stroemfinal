import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {

  return (
    <nav className='adminnav'>
      <NavLink to="/"><div className='logo-box'><img src="/assets/logo.png" alt="Strøm logo" /></div></NavLink>
      <ul className='menu-nav' id='menu'>
        <li><NavLink aria-current="page" to="/admin">Home</NavLink></li>
        <li><NavLink aria-current="page" to="/admin/AdminService">service</NavLink></li>
      </ul>
    </nav >
  )
}

export default AdminNavbar