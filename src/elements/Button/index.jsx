import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Button = props => (
  <button type={props.type} className={styles.btn}>
    {props.children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
