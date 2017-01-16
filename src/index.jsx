import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import './styles/global.scss';

import Main from './layouts/Main';
import Home from './containers/Home';
import About from './containers/About';

render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
