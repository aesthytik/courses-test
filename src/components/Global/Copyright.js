import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #ffffff;
  position: relative;
  > div {
    width: 76%;
  }
  .arrow {
    position: absolute;
    top: 25%;
    right: 0;
    @media screen and (max-width: 600px) {
      margin-top: 145px;
      margin-right: 130px;
      width: 15%;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      position: absolute;
      top: 88%;
      right: 45%;
      width: 9%;
    }
  }
`;

const Copyright = () => (
  <Container className="section">
    <div className="container has-text-grey has-text-centered">
      <div className="columns is-desktop is-size-6">
        <div className="column">
          <h3 className="is-uppercase">© 2018 LEARN REALM INC.</h3>
        </div>
        <div className="column">
          <h3 className="is-uppercase">
            <a href="#" className="has-text-grey">
              TERMS & CONDITIONS
            </a>
          </h3>
        </div>
        <div className="column">
          <h3 className="is-uppercase">
            <a href="#" className="has-text-grey">
              PRIVACY POLICY
            </a>
          </h3>
        </div>
        <div className="column">
          <h3 className="is-uppercase">
            <a href="#" className="has-text-grey">
              SITE MAP
            </a>
          </h3>
        </div>
      </div>
    </div>
    <a href="">
      <img
        src="/images/backtotop-btn.svg"
        className="arrow"
        alt="back-to-top"
      />
    </a>
  </Container>
);

export default Copyright;