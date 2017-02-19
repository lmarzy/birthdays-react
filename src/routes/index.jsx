import React from 'react';
import { Route } from 'react-router';
import { Main } from 'containers';

import home from './home';

export default (
  <Route path="/" component={Main}>
    {home}
  </Route>
);
