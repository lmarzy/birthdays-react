import React, { PropTypes } from 'react';
import './index.scss';

const Button = props => (
  <button type={props.type} className="btn">{props.text}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
