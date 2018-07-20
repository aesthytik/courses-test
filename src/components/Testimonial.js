import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  height: auto;
`;

const Testimonial = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <h2 className="subtitle is-size-3 has-text-grey has-text-weight-bold">
        We have been crying out for a change in the education system, how
        teachers can work smarter, engage our children and equip them with
        skills for the ‘real world’ and we have found it
      </h2>
      <div className="has-text-grey has-text-weight-light">JAMES CAAN CBE</div>
    </div>
  </Container>
);

export default Testimonial;
