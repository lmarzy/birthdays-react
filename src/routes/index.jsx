import React from 'react';
import { Route } from 'react-router';
import { App } from 'containers';

import home from './home';

export default (
  <Route path="/" component={App}>
    {home}
  </Route>
);
