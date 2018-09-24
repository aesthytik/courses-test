import React from 'react';
import styled from 'styled-components';

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

const SignUpForm = () => (
  <SignupForm className="column is-half">
    <div className="box">
      <div className="has-text-centered has-text-weight-bold is-size-4">
        Sign up
      </div>
      <br />
      <Form />
    </div>
  </SignupForm>
);

export default SignUpForm;
