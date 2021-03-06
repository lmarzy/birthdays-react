import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const GridCol = (props) => {
  const classArray = props.span.map(value => styles[`span${value}`]);

  const classNames = classnames(classArray);

  return (
    <div className={classNames}>
      {props.children}
    </div>
  );
};

GridCol.propTypes = {
  span: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default GridCol;
