import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ededed;
  height: auto;
  padding: 6%;
  margin-top: -1px;
  .column {
    padding-left: 14%;
  }
  .last-content {
    padding-left: 1% !important;
  }
  .second-column {
    margin-top: 8%;
  }
  .content li {
    margin-bottom: 1rem;
  }
  .content ul {
    list-style-position: outside;
    list-style-image: url('/images/Oval.svg') !important;
    margin-left: 2em;
    margin-top: 1em;
    line-height: 1.9rem;
  }
`;

const SectionOne = () => (
  <Container className="section">
    <div className="container" id="margin-top">
      <div className="columns">
        <div className="column is-half">
          <div className="content">
            <p className="is-size-3 has-text-weight-light">
              Engaging resources to empower<br />teaching and learning
            </p>
            <ul className="is-size-5">
              <li>
                Themed sessions on core subjects & special<br />industry
                programmes
              </li>
              <li>
                Bite-sized activities for starters, plenaries, mid<br /> lesson
                reviews
              </li>
              <li>SOS activities to get your students back on task</li>
            </ul>
          </div>
        </div>
        <div className="column is-half has-text-right">
          <img
            className="is-pulled-left"
            src="images/illustration-1.svg"
            alt="illustration-1"
          />
        </div>
      </div>
      <div className="columns second-column">
        <div className="column is-half">
          <img src="images/illustration-2.svg" alt="illustration-2" />
        </div>
        <div className="column last-content is-half">
          <div className="content">
            <p className="is-size-3 has-text-weight-semibold">
              Your own personal teaching kit<br />at the tip of your fingers
            </p>
            <ul className="is-size-5">
              <li>
                Themed sessions on core subjects & special<br />industry
                programmes
              </li>
              <li>
                Bite-sized activities for starters, plenaries, mid<br />lesson
                reviews
              </li>
              <li className="has-text-weight-light">
                SOS activities to get your students back on task
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default SectionOne;
