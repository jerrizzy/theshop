import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (

    <nav className='navbar'>
    <div className='navbar-container'>

      <ul className='nav-links'>
        <h1 className='logo'>TheShop</h1>
        <NavLink to='/' exact activeclassname='active'>Home</NavLink>
        <NavLink to='/services' activeclassname='active'>Services</NavLink>
        <NavLink to='/gallery' activeclassname='active' >Gallery</NavLink>
      </ul>

        <div class="navbar-social">
            <a href="#"><img src="instagram-icon.png" alt="Instagram"/></a>
            <a href="#"><img src="facebook-icon.png" alt="Facebook"/></a>
            <a href="#"><img src="twitter-icon.png" alt="Twitter"/></a>
        </div>

    </div>
    </nav>
  )
}

export default NavBar