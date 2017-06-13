import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, About } from 'containers';
import { Header, Footer, Container } from 'components';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <main>
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Container>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
