import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const GridRow = props => (
  <div className={styles.grid}>
    {props.children}
  </div>
);

GridRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default GridRow;
