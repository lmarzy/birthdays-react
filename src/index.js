import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

function Welcome() {
  return (
    <header>Welcome</header>
  )
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));
