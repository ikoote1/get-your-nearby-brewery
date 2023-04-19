import { BsChevronLeft } from 'react-icons/bs';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styling/nav.css';

const Nav = () => (
  <nav>
    <NavLink to="/" className="nav"><BsChevronLeft /></NavLink>
    <div className="nav">Breweries Location</div>
    <NavLink to="About" className="nav">About</NavLink>
  </nav>
);

export default Nav;
