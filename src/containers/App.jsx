import React, { PropTypes } from 'react';
import { Header, Footer } from 'components';

const App = props => (
  <div>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
