import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
  background-color: #69d1c5;
  height: auto;
  padding: 8%;

  h1 {
    line-height: 7rem;
  }
`;

const Btn = styled.a`
  background-color: #fff0;
  border-width: 0.2rem;
  border-color: #5a6175;
  padding: 2.5rem 3.5rem !important;
  margin-top: 2rem;
  :hover {
    border-color: ${darken(0.1, '#5a6175')} !important;
    color: ${darken(0.1, '#5a6175')} !important;
  }
`;

const SectionThree = () => (
  <Container className="section">
    <div className="container has-text-centered is-fullhd">
      <div className="has-text-grey">
        Find starter & plenary activites to get your students instantly engaged
      </div>
      <h1 className="title has-text-grey">Need student focus?</h1>
      <h2 className="subtitle is-size-3 has-text-grey has-text-weight-bold">
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
