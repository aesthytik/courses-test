import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.section`
  background-color: #69d1c5;
  height: auto;
  padding: 8%;

  h1 {
    line-height: 7rem;
  }
  .title {
    @media screen and (max-width: 600px) {
      font-size: 2.45rem !important;
      line-height: 2.5rem !important;
      margin-top: 2rem;
    }
  }
  .subtitle {
    @media screen and (max-width: 600px) {
      margin-top: 77px !important;
      font-size: 1.5rem !important;
      width: 89%;
      margin-left: 7%;
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
    font-size: 0.8125rem !important;
  }
  :hover {
    border-color: ${darken(0.1, '#5a6175')} !important;
    color: ${darken(0.1, '#5a6175')} !important;
  }
`;

const Find = styled.div`
  @media screen and (max-width: 600px) {
    margin-top: 2.8125rem!important;
    }
  }
`;

const SectionThree = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <Find className="has-text-grey">
        Find starter & plenary activites to get your students instantly engaged
      </Find>
      <h1 className="title has-text-grey is-size-5-mobile">
        Need student focus?
      </h1>
      <h2 className="subtitle is-size-3 has-text-grey has-text-weight-bold is-size-5-mobile">
        Our structured starter & plenaries spark motivation, <br />enthusiasm
        and connect student learning.
      </h2>
      <Btn className="button is-rounded has-text-grey is-outlined is-large">
        <span className="is-size-6 has-text-weight-bold">SIGN UP FOR FREE</span>
      </Btn>
    </div>
  </Container>
);

export default SectionThree;
