import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ededed;
  height: auto;
  padding: 6%;
  margin-top: -1px;
  @media screen and (max-width: 600px) {
  }
  .is-half {
    padding-left: 14%;
  }
  .last-content {
    padding-left: 1% !important;
  }
  .second-column {
    margin-top: 8%;
  }

  .content {
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      margin-left: 15%;
    }
  }
  p {
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 2rem !important;
    }
  }
  .content li {
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 1.75rem !important;
    }
  }
  .content ul {
    list-style-position: outside;
    list-style-image: url('/images/Oval.svg') !important;
    margin-left: 2em;
    margin-top: 1em;
    line-height: 1.9rem;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    }
  }
`;

const SectionOne = () => (
  <Container className="section">
    <div className="container is-fullhd" id="margin-top">
      <div className="is-hidden-mobile">
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
                  Bite-sized activities for starters, plenaries, mid<br />{' '}
                  lesson reviews
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
      {/* mobile-view */}
      <div className="columns is-hidden-tablet">
        <div className="column has-text-centered">
          <img src="images/illustration-1.svg" alt="illustration-1" />
        </div>
        <div className="column">
          <div className="content">
            <p className="is-size-5 has-text-weight-bold">
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
        <div className="column has-text-centered">
          <img src="images/illustration-2.svg" alt="illustration-2" />
        </div>
        <div className="column">
          <div className="content">
            <p className="is-size-5 has-text-weight-bold">
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
