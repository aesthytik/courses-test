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

const StudentActivities = ({ activities }) => (
  <Container className="section">
    <div className="container has-text-centered">
      <Wrapper className="has-text-grey">Student led activities</Wrapper>

      <div className="columns">
        {activities.map(activity => (
          <div className="column" key={activity.name}>
            <img src={activity.image} alt={activity.name} />
            <br />
            <br />
            <div className="subtitle has-text-weight-bold">{activity.name}</div>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default StudentActivities;
