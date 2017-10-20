import React from 'react';
import { NavLink } from 'react-router-dom';

// This component is used to display the main navigation for the app, NavLink used over Link
const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink to="/cats">Cats</NavLink></li>
      <li><NavLink to="/dogs">Dogs</NavLink></li>
      <li><NavLink to="/birds">Birds</NavLink></li>
    </ul>
  </header>
);

export default Header;
