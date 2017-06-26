import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Heading = props => (
  <h2 className={styles.heading}>
    {props.children}
  </h2>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
