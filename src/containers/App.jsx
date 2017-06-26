import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from 'containers';

const App = () => (
  <BrowserRouter>
    <main>
      <Route exact path="/" component={Home} />
    </main>
  </BrowserRouter>
);

export default App;
