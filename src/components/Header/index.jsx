import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Heading } from 'elements';

import styles from './styles.scss';

const Header = props => (
  <header className={styles.header}>
    <div className={styles.iconWrap}>
      <Icon name={props.icon} />
    </div>
    <Heading>{props.text}</Heading>
  </header>
);

Header.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
