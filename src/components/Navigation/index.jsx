import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Navigation = () => (
  <nav className="c-siteNavigation">
    <ul className="c-siteNavigation_items">
      <li className="c-siteNavigation_item">
        <Link to="/" className="c-siteNavigation_link">Home</Link>
      </li>
      <li classNama="c-siteNavigation_item">
        <Link to="/about" className="c-siteNavigation_link">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
