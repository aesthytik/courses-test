import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  height: auto;
  .container {
    display: flex;
    margin-left: 24%;
  }
  h3 {
    padding-right: 4%;
  }
`;

const Copyright = () => (
  <Container className="section">
    <div className="container is-fullhd has-text-grey">
      <div>
        <h3 className="is-uppercase">© 2018 LEARN REALM INC.</h3>
      </div>

      <div>
        <h3 className="is-uppercase">
          <a href="#" className="has-text-grey">
            TERMS & CONDITIONS
          </a>
        </h3>
      </div>

      <div>
        <h3 className="is-uppercase">
          <a href="#" className="has-text-grey">
            PRIVACY POLICY
          </a>
        </h3>
      </div>

      <div>
        <h3 className="is-uppercase">
          <a href="#" className="has-text-grey">
            SITE MAP
          </a>
        </h3>
      </div>
    </div>
  </Container>
);

export default Copyright;
