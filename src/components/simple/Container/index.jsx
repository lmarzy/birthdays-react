import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Container = props => (
  <div className={styles.container}>
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Container;
