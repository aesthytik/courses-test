import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #d5f3e5;
  height: auto;
  padding: 5%;
  ul{
    width: 71%;
    @media screen and (max-width: 600px) {
      width: 100%;
      
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 18px!important;
    
    
  }
  li {
    padding-top: 2rem;
  }
  span {
    font-weight: bold;
  }
}
`;

const LearningObjAndOutcomes = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="is-size-4 has-text-weight-semibold">
            Learning Objectives
          </div>
          <ul className="is-size-5">
            <li>
              To <span>understand</span> what technological push and market pull
              are.
            </li>
            <li>
              To <span>analyse</span> how technology and consumers have impacted
              apple products.
            </li>
            <li>
              To <span>evaluate</span> how apple products have had an influence
              society
            </li>
          </ul>
        </div>
        <div className="column">
          <div className="is-size-4 has-text-weight-semibold">
            Learning Outcomes
          </div>
          <ul className="is-size-5">
            <li>
              To <span>understand</span> what technological push and market pull
              are.
            </li>
            <li>
              To <span>analyse</span> how technology and consumers have impacted
              apple products.
            </li>
            <li>
              To <span>evaluate</span> how apple products have had an influence
              society
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
);

export default LearningObjAndOutcomes;
