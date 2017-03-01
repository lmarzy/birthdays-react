import React from 'react';
import { Route } from 'react-router';
import { App } from 'containers';

import home from './home';
import about from './about';

export default (
  <Route path="/" component={App}>
    {home}
    {about}
  </Route>
);
