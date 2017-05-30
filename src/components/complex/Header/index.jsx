import React from 'react';
import { Navigation, Button, Input } from 'components';
import './index.scss';

const Header = () => (
  <header role="banner" className="siteHeader">
    <h1>React Kickstarter</h1>
    <Navigation />
    <Input type="text" />
    <Button type="button" text="Button" />
  </header>
);

export default Header;
