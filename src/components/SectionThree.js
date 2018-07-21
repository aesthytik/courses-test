import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #69d1c5;
  height: auto;
  padding: 8%;
`;

const Btn = styled.a`
  background-color: #fff0;
  border-width: 0.2rem;
  border-color: grey;
`;

const SectionThree = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <div className="has-text-grey">
        Find starter & plenary activites to get your students instantly engaged
      </div>
      <h1 className="title has-text-grey">Need student focus?</h1>
      <h2 className="subtitle is-size-3 has-text-grey has-text-weight-bold">
        Our structured starter & plenaries spark motivation, enthusiasm and
        connect student learning.
      </h2>
      <Btn className="button is-rounded has-text-grey is-grey is-outlined is-large">
        <span className="is-size-6">SIGN UP FOR FREE</span>
      </Btn>
    </div>
  </Container>
);

export default SectionThree;
