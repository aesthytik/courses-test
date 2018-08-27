import React from 'react';
import styled from 'styled-components';

import { HoverPrimaryButton, HoverSecondaryButton } from '../../elements/Hover';

const TextAlign = styled.div`
  width: 72%;
  margin-left: 15%;
  color: #5a6175;
  padding-top: 6%;
  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 100%;
    margin-left: 0px;
    margin-top: 5px;
    font-weight:800;
  }
}
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 19px;
   }
}
`;

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

const TextStyled = styled.div`
  padding: 2%;
`;

const SignUpForm = () => (
  <SignupForm className="column is-half">
    <div className="box">
      <div className="has-text-centered has-text-weight-bold is-size-4">
        Sign up
      </div>
      <br />
      <form>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              type="text"
              placeholder="First name"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              type="text"
              placeholder="Email address"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              type="password"
              placeholder="Password (8+ characters)"
            />
          </div>
        </div>
        <HoverPrimaryButton
          className="primary-color has-text-weight-bold"
          height="79px"
          width="100%"
        >
          <span className="is-size-6 has-text-white">GET STARTED</span>
        </HoverPrimaryButton>

        <TextStyled className="has-text-centered">OR</TextStyled>
        <HoverSecondaryButton
          className="secondary-color has-text-weight-bold"
          height="79px"
          width="100%"
        >
          <span className="is-size-6 has-text-white">
            SIGN UP WITH FACEBOOK
          </span>
        </HoverSecondaryButton>

        <TextAlign className="content has-text-centered has-text-lightgrey">
          BY CONTINUING, YOU AGREE TO LEARN REALM’S<br />
          <a href="#">
            <span> TERMS & CONDITIONS </span>
          </a>
          AND
          <a href="#">
            <span> PRIVACY POLICY</span>
          </a>
        </TextAlign>
      </form>
    </div>
  </SignupForm>
);

export default SignUpForm;
