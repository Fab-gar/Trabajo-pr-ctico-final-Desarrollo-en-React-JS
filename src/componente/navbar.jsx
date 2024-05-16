import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <NavLink to={'/'}> Inicio    </NavLink>
        <NavLink to={'/Producto'}>   Producto </NavLink>
    </nav>
  );
}

export default Navbar