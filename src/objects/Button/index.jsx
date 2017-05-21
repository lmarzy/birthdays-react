import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = props => (
  <button type={props.type} className="btn">{props.text}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
