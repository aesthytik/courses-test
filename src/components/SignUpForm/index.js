import React from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Form from './Form';

let alertify;
if (process.browser) {
  alertify = require('alertify.js'); // eslint-disable-line
}

const SignupForm = styled.div`
  padding-left: 8%;
  @media screen and (max-width: 600px) {
    padding-left: 0px !important;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-left: 0px !important;
  }
}
`;

const registerMutation = gql`
  mutation(
    $firstName: String
    $lastName: String
    $email: String!
    $password: String!
  ) {
    register(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      jwt
      user {
        id
        email
        profile {
          firstName
          lastName
        }
      }
    }
  }
`;

const SignUpForm = ({ navigate }) => {
  const handleUpdate = (cache, { data: { register } }) => {
    // set token to local storage
    localStorage.setItem('token', register.jwt);

    cache.writeData({
      data: {
        isLoggedIn: true,
        user: {
          __typename: 'User',
          id: register.user.id,
          email: register.user.email,
          firstName: register.user.profile.firstName,
          lastName: register.user.profile.lastName,
        },
      },
    });
  };

  const handleOnCompleted = () => {
    alertify.success('Account created successfully');
    navigate('/dashboard');
  };

  return (
    <SignupForm className="column is-half">
      <div className="box">
        <div className="has-text-centered has-text-weight-bold is-size-4">
          Sign up
        </div>
        <br />
        <Mutation
          mutation={registerMutation}
          update={handleUpdate}
          onCompleted={handleOnCompleted}
          onError={error => alertify.error(error)}
        >
          {(register, { loading }) => (
            <div>
              <Form
                submit={input => register({ variables: input })}
                loading={loading}
              />
            </div>
          )}
        </Mutation>
      </div>
    </SignupForm>
  );
};

export default SignUpForm;
