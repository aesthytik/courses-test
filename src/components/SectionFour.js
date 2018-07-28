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

const SectionFour = () => (
  <Container className="section">
    <div className="container has-text-centered is-fullhd">
      <div className="has-text-grey">
        Teach students in demand skills will the help and support of leading
        businesses
      </div>
      <h1 className="title has-text-grey">Boost industry skills</h1>
      <h2 className="subtitle is-size-3 has-text-grey has-text-weight-bold">
        We collaborate with industry leaders to create project packs focused<br />on
        teaching real world skills to equip students with industry knowledge.
      </h2>
      <Btn className="button is-rounded has-text-grey is-grey is-outlined is-large">
        <span className="is-size-6 has-text-weight-bold">SIGN UP FOR FREE</span>
      </Btn>
    </div>
  </Container>
);

export default SectionFour;
