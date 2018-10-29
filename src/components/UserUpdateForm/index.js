import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';
// import { darken } from 'polished';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';

// import Button from '../../elements/Button';
import Form from './Form';

const Wrapper = styled.div`
  .container {
    padding: 5rem;
  }
`;

// let alertify;
// if (process.browser) {
//   alertify = require('alertify.js'); // eslint-disable-line
// }

// const loginMutation = gql`
//   mutation($email: String!, $password: String!) {
//     login(input: { email: $email, password: $password }) {
//       jwt
//       user {
//         id
//         email
//         profile {
//           firstName
//           lastName
//         }
//       }
//     }
//   }
// `;

const LoginForm = ({ navigate }) => (
  // const handleUpdate = (cache, { data: { login } }) => {
  //   // set token to local storage
  //   localStorage.setItem('token', login.jwt);

  //   cache.writeData({
  //     data: {
  //       isLoggedIn: true,
  //       user: {
  //         __typename: 'User',
  //         id: login.user.id,
  //         email: login.user.email,
  //         firstName: login.user.profile.firstName,
  //         lastName: login.user.profile.lastName,
  //       },
  //     },
  //   });
  // };

  // const handleOnCompleted = () => {
  //   navigate('/dashboard/');
  //   alertify.success('Logged in succesfully');
  // };
  <div>
    <div className="box">
      <h1 className="is-size-4 has-text-weight-bold	">Update Profile</h1>
      <hr />
      <Form
        firstName="vdnvfv"
        lastName="dhsaagdha"
        email="devnasim@gmail.com"
        dob="12/34/7632"
        location="cbbchdcvh"
      />
    </div>
  </div>
);

export default LoginForm;
