import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Icon = props => (
  <svg className={`${styles.icon} icon-${props.name}`}>
    <use xlinkHref={`#icon-${props.name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
