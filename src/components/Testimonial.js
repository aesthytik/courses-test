import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  height: auto;
  padding: 5%;
  @media screen and (max-width: 600px) {
    font-size: 18px!important;
    text-align: center!important;
    margin-top: 25px;
  }
}
`;

const Testimonial = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <h2 className="subtitle is-size-3 has-text-grey has-text-weight-bold is-size-5-mobile ">
        We have been crying out for a change in the education<br />system, how
        teachers can work smarter, engage our children and<br />equip them with
        skills for the ‘real world’ and we have found it
      </h2>
      <div className="has-text-grey has-text-weight-light is-size-7-mobile">
        JAMES CAAN CBE
      </div>
    </div>
  </Container>
);

export default Testimonial;
