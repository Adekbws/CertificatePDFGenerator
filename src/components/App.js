import React from 'react';
import { Route, Link, Switch,  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import Navigation from './Navigation';

import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container>

      <Navigation />

      <hr />

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );
};

export default App;
