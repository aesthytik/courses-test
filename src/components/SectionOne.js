import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ededed;
  height: auto;
`;

const SectionOne = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <div className="content">
            <p className="is-size-3">
              Engaging resources to empower teaching and learning
            </p>
            <ul>
              <li>
                Themed sessions on core subjects & special industry programmes
              </li>
              <li>
                Bite-sized activities for starters, plenaries, mid lesson
                reviews
              </li>
              <li>SOS activities to get your students back on task</li>
            </ul>
          </div>
        </div>
        <div className="column is-half">
          <img src="images/illustration-1.svg" alt="illustration-1" />
        </div>
      </div>
      <div className="columns">
        <div className="column is-half">
          {' '}
          <img src="images/illustration-2.svg" alt="illustration-2" />
        </div>
        <div className="column is-half">
          <div className="content">
            <p className="is-size-3">
              Your own personal teaching kit at the tip of your fingers
            </p>
            <ul>
              <li>
                Themed sessions on core subjects & special industry programmes
              </li>
              <li>
                Bite-sized activities for starters, plenaries, mid lesson
                reviews
              </li>
              <li>SOS activities to get your students back on task</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default SectionOne;
