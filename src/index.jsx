import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './index.scss';

const router = (
  <Router history={browserHistory} routes={routes} />
);

render(
  router,
  document.getElementById('app'),
);
