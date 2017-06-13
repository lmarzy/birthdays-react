import React from 'react';
import { Icon, Input, Button } from 'components';

import styles from './styles.scss';

const Header = () => (
  <header role="banner" className={styles.header}>
    <h1>React Kickstarter</h1>
    <Icon name="tick" />
    <Input type="text" />
    <Button type="text">Testing 123</Button>
  </header>
);

export default Header;
