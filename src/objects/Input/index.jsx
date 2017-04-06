import React, { PropTypes } from 'react';
import './index.scss';

const Input = props => (
  <input type={props.type} />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Input;
