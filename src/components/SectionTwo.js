import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
  background-image: url('images/pattern.svg');
  background-repeat: no-repeat;
  background-position: right center;
  background-color: #7ebce6;
  height: auto;
  padding: 8%;
}
  h1 {
    line-height: 7rem;
  }
  .title {
    @media screen and (max-width: 600px) {
      font-size: 2.525rem !important;
      line-height: 43px!important;
      margin-top: 24px;
    }
  }
  .subtitle {
    @media screen and (max-width: 600px) {
      margin-top: 3rem !important;
      width: 82%;
      margin-left: 11%;
    }
  }
`;

const Btn = styled.a`
  border-width: 0.2rem;
  padding: 2.5rem 3.5rem !important;
  margin-top: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 29px !important;
    margin-top: 78px !important;
    margin-bottom: 46px !important;
    width: 194px!important;
    height: 3.5625rem!important;
    font-size: 12px!important;
    border: 4px solid #ffffff;
  }
}
  :hover {
    background-color: #7dbce7 !important;
    border-color: ${darken(0.1, '#fff')} !important;
    color: ${darken(0.1, '#fff')} !important;
  }
`;

const Find = styled.div`
  margin-top: 22px;
  @media screen and (max-width: 600px) {
    margin-top: 45px;
  }
}
`;

const SectionTwo = () => (
  <Container className="section">
    <div className="container has-text-centered is-fullhd">
      <Find className="has-text-white">
        Find engaging resources that will save you hours of time
      </Find>
      <h1 className="title has-text-white is-size-5-mobile has-text-centered-mobile">
        Not enough time to plan?
      </h1>
      <h2 className="subtitle is-size-3 has-text-white has-text-weight-bold is-size-4-mobile">
        Our resources are packed full of differentiating activities & explainer
        videos. <br />Download project worksheets & powerpoints instantly to
        your account.
      </h2>

      <Btn className="button is-rounded has-text-white is-white is-outlined is-large">
        <span className="is-size-6 has-text-weight-bold">SIGN UP FOR FREE</span>
      </Btn>
    </div>
  </Container>
);

export default SectionTwo;
