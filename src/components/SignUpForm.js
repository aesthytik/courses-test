import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
  background-color: #ededed;
  padding: 8%;
  .field:not(:last-child) {
    margin-bottom: 7%;
    color: #5a6175;
  }
  span {
    color: #1dbe71;
  }
  h1 {
    color: #5a6175;
    font-size: 2.8125rem;
  }
  .input {
    border-radius: 0px;
    padding-left: 0rem;
    border-bottom-width: 2px;
    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
  .box {
    background-color: #fff;
    border-radius: 0px;
    box-shadow: 0 0px 0px rgba(10, 10, 10, 0.1), 0 0 0 rgba(10, 10, 10, 0.1);
    color: #5a6175 !important;
    display: block;
    padding-top: 2.7rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2.7rem;
  }
  .get-started-button {
    :hover {
      background-color: ${darken(0.2, '#1dbe71')} !important;
    }
  }
  .sign-up-btn {
    :hover {
      background-color: ${darken(0.2, '#7ebce6')} !important;
    }
  }
`;

const SignUpButton = styled.a`
  width: 100%;
  height: 4.9375rem;
  border-radius: 1.25rem;
}
  + div {
    color: #5a6175;
  }
`;

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

const SignupImage = styled.div`
  padding-top: 11%;
`;

const BallonImage = styled.img`
  position: absolute;
  top: 9%;
  right: 86%;
  @media screen and (max-width: 600px) {
    visibility: hidden;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    visibility: hidden;
  }
}
`;

const SunImage = styled.img`
  position: absolute;
  top: 0%;
  right: 76%;
  @media screen and (max-width: 600px) {
    visibility: hidden;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    visibility: hidden;
  }
}
`;

const Or = styled.div`
  padding: 2%;
`;

const SignUpForm = () => (
  <Container className="section">
    <div className="container is-fullhd has-text-grey">
      <div className="columns is-tablet is-size-6">
        <div className="column is-half">
          <div className="columns">
            <div className="column is-half">
              <BallonImage src="/images/air-baloon.svg" alt="air-balloon " />
              <SunImage src="/images/sun-cloud.svg" alt="air-balloon" />
            </div>
            <div className="column is-half">
              <div className="content">
                <h1 className="has-text-weight-bold is-size-3-mobile is-size-1-touch">
                  Support the change in our education system
                </h1>
                <ul className="is-size-4">
                  <li>Free resources</li>
                  <li>Save planning time</li>
                  <li>Something else</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="columns">
            <SignupImage className="column">
              <img src="/images/signup-illustration.svg" alt="signup" />
            </SignupImage>
          </div>
        </div>
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
              <SignUpButton className="button primary-color is-large has-text-centered get-started-button">
                <span className="is-size-6 has-text-white">GET STARTED</span>
              </SignUpButton>
              <Or className="has-text-centered">OR</Or>
              <SignUpButton className="button secondary-color is-large has-text-centered sign-up-btn">
                <span className="is-size-6 has-text-white">
                  SIGN UP WITH FACEBOOK
                </span>
              </SignUpButton>
              <TextAlign className="content has-text-centered has-text-lightgrey">
                BY CONTINUING, YOU AGREE TO LEARN REALM’S
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
      </div>
    </div>
  </Container>
);

export default SignUpForm;
