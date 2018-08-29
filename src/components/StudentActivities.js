import React from 'react';
import styled from 'styled-components';

import Heading from '../elements/Heading';

const Container = styled.section`
  background-color: #d0e6f5;
  height: auto;
  padding: 5%;
  @media screen and (max-width: 600px) {
    font-size: 18px!important;
    text-align: center!important;   
  }
  .subtitle {
    color: #5a6175 !important;
    font-size: 25px;
  }
}
`;

const Wrapper = styled(Heading)`
  padding: 0rem 0rem 5rem 0rem;
`;

const StudentActivities = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <Wrapper className="has-text-grey">Student led activities</Wrapper>
      <div className="columns">
        <div className="column">
          <img src="/images/quiz.svg" alt="quiz" />
          <br />
          <br />
          <div className="subtitle has-text-weight-bold">Quiz</div>
        </div>
        <div className="column">
          <img src="/images/note-taking.svg" alt="note-taking" />
          <br />
          <br />
          <div className="subtitle has-text-weight-bold">Note taking</div>
        </div>
        <div className="column">
          <img src="/images/peer-assessment.svg" alt="peer-assessment" />
          <br />
          <br />
          <div className="subtitle has-text-weight-bold">Peer assessment</div>
        </div>
        <div className="column">
          <img src="/images/target-setting.svg" alt="target-setting" />
          <br />
          <br />
          <div className="subtitle has-text-weight-bold">Target setting</div>
        </div>
      </div>
    </div>
  </Container>
);

export default StudentActivities;
