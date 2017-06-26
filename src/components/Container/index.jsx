import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Container = (props) => {
  const classes = classnames(styles.container, styles[props.class]);

  return (
    <section className={classes}>
      {props.children}
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  class: PropTypes.string.isRequired,
};

export default Container;
