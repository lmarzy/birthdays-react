import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Input = props => (
  <input type={props.type} className="input" />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Input;
