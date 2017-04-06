import React from 'react';
import { Button } from 'objects';
import './index.scss';

const Header = () => (
  <header role="banner" className="siteHeader">
    <h1>React Kickstarter</h1>
    <Button type="button" text="Button" />
  </header>
);

export default Header;
