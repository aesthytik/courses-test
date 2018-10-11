import React from 'react';
import { Router, Location } from '@reach/router';

import Home from './home';
import NotFound from './404';
import Login from './login';
import Dashboard from './dashboard';
import SignUp from './sign-up';
import Blog from './blog';

export default () => (
  <Location>
    {({ location }) => (
      <Router location={location}>
        <Home path="/" />
        <Login path="/login/" />
        <Dashboard path="/dashboard/" />
        <SignUp path="/sign-up/" />
        <Blog path="/blog/" />
        <NotFound default />
      </Router>
    )}
  </Location>
);
