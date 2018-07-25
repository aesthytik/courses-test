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

  h1 {
    line-height: 7rem;
  }
`;

const Btn = styled.a`
  border-width: 0.2rem;
  padding: 2.5rem 3.5rem !important;
  margin-top: 2rem;
  :hover {
    background-color: #7dbce7 !important;
    border-color: ${darken(0.1, '#fff')} !important;
    color: ${darken(0.1, '#fff')} !important;
  }
`;

const SectionTwo = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <div className="has-text-white">
        Find engaging resources that will save you hours of time
      </div>
      <h1 className="title has-text-white">Not enough time to plan?</h1>
      <h2 className="subtitle is-size-3 has-text-white has-text-weight-bold">
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
