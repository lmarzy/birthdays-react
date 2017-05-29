import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.scss';

const GridCol = (props) => {
  const classArray = [];

  props.span.forEach((span) => {
    classArray.push(styles[`span${span}`]);
  });

  const classNames = classnames(classArray);

  return (
    <div className={classNames}>
      {props.children}
    </div>
  );
};

GridCol.propTypes = {
  span: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.element.isRequired,
};

export default GridCol;
