import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
  background-color: #fccc63;
  height: auto;
  padding: 8%;

  h1 {
    line-height: 7rem;
  }
  .title {
    @media screen and (max-width: 600px) {
      font-size: 2.1rem !important;
      line-height: 2.5rem !important;
      margin-top: 2rem;
    }
  }
  .subtitle {
    @media screen and (max-width: 600px) {
      font-size: 1.375rem !important;
      margin-top: 3rem !important;
      width: 91%;
      margin: 8%;
    }
  }
`;

const Btn = styled.a`
  background-color: #fff0;
  border-width: 0.2rem;
  border-color: #5a6175;
  padding: 2.5rem 3.5rem !important;
  margin-top: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 1.8125rem !important;
    margin-top: 78px !important;
    margin-bottom: 2.875rem !important;
    width: 226px !important;
    height: 0.875rem !important;
    font-size: 0.75rem !important;
  }
  :hover {
    border-color: ${darken(0.1, '#5a6175')} !important;
    color: ${darken(0.1, '#5a6175')} !important;
  }
`;

const Teach = styled.div`
  @media screen and (max-width: 600px) {
    margin-top: 2.8125rem!important;
  }
}
`;

const SectionFour = () => (
  <Container className="section">
    <div className="container has-text-centered is-fullhd">
      <Teach className="has-text-grey">
        Teach students in demand skills will the help and support of leading
        businesses
      </Teach>
      <h1 className="title has-text-grey  is-size-5-mobile">
        Boost industry skills
      </h1>
      <h2 className="subtitle is-size-3 has-text-grey has-text-weight-bold is-size-5-mobile">
        We collaborate with industry leaders to create project packs focused<br />on
        teaching real world skills to equip students with industry knowledge.
      </h2>
      <Btn className="button is-rounded has-text-grey is-grey is-outlined is-large is-medium-mobile">
        <span className="is-size-6 has-text-weight-bold">SIGN UP FOR FREE</span>
      </Btn>
    </div>
  </Container>
);

export default SectionFour;
