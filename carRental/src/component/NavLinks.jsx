import React from 'react';
import { NavLink } from "react-router-dom";

const NavLinks = ({menuOpen, closeMenu}) => {

  return (
    <nav>
          <ul className={` flex gap-8 text-lg font-semibold ${menuOpen}  capitalize`}>
            <li className="  hover:text-primary">
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="  hover:text-primary">
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            </li>
            <li className="  hover:text-primary">
              <NavLink to="/vehicleModel" onClick={closeMenu}>Vehicle Models</NavLink>
            </li>
            <li className="  hover:text-primary">
              <a href="/#Testimonials" onClick={closeMenu}>Testimonials</a>
            </li>
            <li className="  hover:text-primary">
              <NavLink to="/contact" onClick={closeMenu}>contact</NavLink>
            </li>
          </ul>
        </nav>
  )
}

export default NavLinks