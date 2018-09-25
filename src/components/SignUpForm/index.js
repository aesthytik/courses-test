import React from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Form from './Form';

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
    }
  }
`;

const SignUpForm = () => {
  const handleOnCompleted = () => {
    console.log('registed sucessfully');
  };

  return (
    <SignupForm className="column is-half">
      <div className="box">
        <div className="has-text-centered has-text-weight-bold is-size-4">
          Sign up
        </div>
        <br />
        <Mutation mutation={registerMutation} onCompleted={handleOnCompleted}>
          {(login, { loading, error }) => (
            <div>
              <Form
                submit={input => login({ variables: input })}
                loading={loading}
              />
              {error && <p>Error :( Please try again {error}</p>}
            </div>
          )}
        </Mutation>
      </div>
    </SignupForm>
  );
};

export default SignUpForm;
