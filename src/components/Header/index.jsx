import React from 'react';
import { Link } from 'react-router';
import './header.scss';

const Header = () => (
  <header className="siteHeader">
    <h1 className="logo">React Kiskstarter!</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </header>
);

export default Header;
