import React from 'react';
import { Router, Location, Redirect } from '@reach/router';

import Home from './home';
import NotFound from './404';
import IndividualPack from '../templates/individualPack';
import Login from './login';
import Dashboard from './dashboard';
import SignUp from './sign-up';
import TeacherDashboard from './teacher-dashboard';
import Blog from '../templates/blog';

// For private routes
const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('hello', localStorage.getItem('token'));
  return (
    <Router
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect from="/login" to={props.location} />
        )
      }
    />
  );
};

export default () => (
  <Location>
    {({ location }) => (
      <Router location={location}>
        <Home path="/" />
        <IndividualPack path="/individual-pack" />
        <Login path="/login" />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <SignUp path="/sign-up" />
        <TeacherDashboard path="/teacher-dashboard" />
        <Blog path="/blog" />
        <NotFound default />
      </Router>
    )}
  </Location>
);
