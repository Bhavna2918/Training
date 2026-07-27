import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
