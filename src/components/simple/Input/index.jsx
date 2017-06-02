import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.scss';

const Input = props => (
  <input type={props.type} className={styles.input} />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Input;
