import React from 'react';
import { Router, Location } from '@reach/router';

import Home from './home';
import NotFound from './404';
import IndividualPack from './individual-pack';
import Login from './login';
import Dashboard from './dashboard';
import SignUp from './sign-up';
import TeacherDashboard from './teacher-dashboard';

// For private routes
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   console.log('hello', localStorage.getItem('token'));
//   return (
//     <Router
//       {...rest}
//       render={props =>
//         localStorage.getItem('token') ? (
//           <Component {...props} />
//         ) : (
//           <Redirect from="/login" to={props.location} />
//         )
//       }
//     />
//   );
// };

export default () => (
  <Location>
    {({ location }) => (
      <Router location={location}>
        <Home path="/" />
        <IndividualPack path="/individual-pac" />
        <Login path="/login" />
        <Dashboard path="/dashboard" />
        <SignUp path="/sign-up" />
        <TeacherDashboard path="/teacher-dashboard" />
        <NotFound default />
      </Router>
    )}
  </Location>
);
