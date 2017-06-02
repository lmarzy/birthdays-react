import React from 'react';
import { render } from 'react-dom';
import { App } from 'containers';

import './assets/css/global.scss';

render(
  <App />,
  document.getElementById('app'),
);
