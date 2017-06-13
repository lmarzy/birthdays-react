import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const SiteNav = () => (
  <nav className={styles.siteNav}>
    <ul className={styles.items}>
      <li className={styles.items}>
        <Link to="/" className={styles.link}>Home</Link>
      </li>
      <li className={styles.items}>
        <Link to="/about" className={styles.link}>About</Link>
      </li>
    </ul>
  </nav>
);

export default SiteNav;
