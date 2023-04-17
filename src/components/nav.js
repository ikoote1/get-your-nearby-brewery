import { BsChevronLeft } from 'react-icons/bs';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <NavLink to="/"><BsChevronLeft /></NavLink>
            <div>Breweries Location</div>
            <NavLink to="About">About</NavLink>
        </nav>
    )
}

export default Nav;

