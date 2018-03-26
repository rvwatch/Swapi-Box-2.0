import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="main-nav">
    <NavLink to="/" className="logo">
      Swapi-box
    </NavLink>
    <NavLink to="/favorites" className="favs">
      Favorites
    </NavLink>
    <nav>
      <ul>
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/vehicles">Vehicles</NavLink>
        </li>
        <li>
          <NavLink to="/starships">Starships</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
