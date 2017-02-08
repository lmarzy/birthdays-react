import React, { PropTypes } from 'react';
import { Header, Footer } from '../components';

const Main = props => (
  <div>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
