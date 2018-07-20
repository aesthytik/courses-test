import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #7ebce6;
  height: auto;
`;

const Btn = styled.a`
  background-color: #fff0;
  border-width: 0.2rem;
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
        videos. Download project worksheets & powerpoints instantly to your
        account.
      </h2>

      <Btn className="button is-rounded has-text-white is-white is-outlined is-large">
        <span className="is-size-6">SIGN UP FOR FREE</span>
      </Btn>
    </div>
  </Container>
);

export default SectionTwo;
