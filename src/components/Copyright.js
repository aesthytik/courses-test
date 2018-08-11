import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  position: relative;
  > div {
    width: 76%;
  }

  #alignment {
    margin-right: -5%;
  }
  .arrow {
    position: absolute;
    top: 25%;
    right: 0;
    @media screen and (max-width: 600px) {
      margin-top: 203px;
      margin-right: 133px;
      width: 15%;
    }
  }
`;

const Copyright = () => (
  <Container className="section">
    <div className="container is-fullhd has-text-grey has-text-centered">
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
        <div className="column" id="alignment">
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
