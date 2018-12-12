import React from 'react';
import { Router, Location } from '@reach/router';

import Home from './home';
import NotFound from './404';
import Dashboard from './dashboard';


export default () => (
  <Location>
    {({ location }) => (
      <Router location={location}>
        <Dashboard path="/dashboard/" />
        <Home path="/" />
      
        <NotFound default />
      </Router>
    )}
  </Location>
);
