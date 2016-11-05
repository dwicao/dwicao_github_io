// Libs
import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Projects from './components/Projects';


// Routes
const routes = (
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="projects" component={Projects}>

      </Route>
    </Route>
  </Router>
);

export default routes;