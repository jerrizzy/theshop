import React from 'react';
import NavLink from 'react-nav-link';

function NavBar() {
  return (

    <div>
        <NavLink to='/' active='active' />Home<NavLink />
        <NavLink to='Service' active='active'/>Service<NavLink />
        <NavLink to='Contact' />Contact<NavLink />

    </div>
  )
}

export default NavBar