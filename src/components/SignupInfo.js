import React from 'react';
import styled from 'styled-components';

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

const SignupInfo = () => (
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
);

export default SignupInfo;
