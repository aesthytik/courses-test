import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
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

const LearningObjAndOutcomes = ({ outcomes, objectives }) => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="is-size-4 has-text-weight-semibold">
            Learning Objectives
          </div>
          <ul className="is-size-5">
            {outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}
          </ul>
        </div>
        <div className="column">
          <div className="is-size-4 has-text-weight-semibold">
            Learning Outcomes
          </div>
          <ul className="is-size-5">
            {objectives.map(objective => <li key={objective}>{objective}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </Container>
);

export default LearningObjAndOutcomes;
