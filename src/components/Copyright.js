import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  height: auto;
`;

const Copyright = () => (
  <Container className="section">
    <div className="container is-fullhd  has-text-grey">
      <div className="columns is-desktop is-size-5">
        <div className="column">
          <h3 className="is-uppercase">© 2018 LEARN REALM INC.</h3>
        </div>
        <div className="column">
          <h3 className="is-uppercase">TERMS & CONDITIONS</h3>
        </div>
        <div className="column">
          <h3 className="is-uppercase">PRIVACY POLICY</h3>
        </div>
        <div className="column">
          <h3 className="is-uppercase"> SITE MAP</h3>
        </div>
      </div>
    </div>
  </Container>
);

export default Copyright;
