import React from 'react';
import { Router, Location, Redirect } from '@reach/router';

import Home from './home';
import NotFound from './404';
import IndividualPack from '../templates/individual-pack';
import Login from './login';
import Dashboard from './dashboard';
import SignUp from './sign-up';
import TeacherDashboard from './teacher-dashboard';
import Blog from './blog';

// For private routes

export default () => (
  <Location>
    {({ location }) => (
      <Router location={location}>
        <Home path="/" />
        <IndividualPack path="/individual-pack" />
        <Login path="/login" />
        <Dashboard path="/dashboardb" />
        <SignUp path="/sign-up" />
        <TeacherDashboard path="/teacher-dashboard" />
        <Blog path="/blog" />
        <NotFound default />
      </Router>
    )}
  </Location>
);
