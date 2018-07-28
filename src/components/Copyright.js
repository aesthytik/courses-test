import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  > div {
    width: 76%;
  }

  #alignment {
    margin-right: -5%;
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
      {/* <div className="is-pulled-right">
        <img src="/images/backtotop-btn.svg" alt="back-to-top" />
      </div> */}
    </div>
  </Container>
);

export default Copyright;
