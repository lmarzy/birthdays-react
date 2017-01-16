import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  children: React.PropTypes.element.isRequired,
};

export default Main;
