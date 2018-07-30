import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #d0e6f5;
  height: auto;
  padding: 3%;
  .columns {
    font-size: 1.5625rem;
  }
  .title {
    font-size: 2.8125rem !important;
  }
  li > a {
    color: #5a6175 !important;
    font-size: 1.5625rem;
  }
  ul {
    line-height: 2.5rem;
  }
  .box {
    margin-top: 6%;
  }
`;

const SavedPacks = () => (
  <Container className="section">
    <div className="container">
      <h1 className="title has-text-grey">My Saved Packs</h1>
      <div className="columns">
        <div className="column">
          <div className="box is-paddingless has-text-centered is-radiusless">
            <img src="/images/saved-packs/steve-jobs.svg" alt="steve-jobs" />
          </div>
          <ul>
            <li className="has-text-weight-bold">
              <a href="#">Design Technology</a>
            </li>
            <li>
              <a href="#">Famous Designer</a>
            </li>
            <li>
              <a href="#">Steve Jobs</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <div className="box is-paddingless has-text-centered is-radiusless">
            <img src="/images/saved-packs/martin.svg" alt="martin" />
          </div>
          <ul>
            <li className="has-text-weight-bold">
              <a href="#">Social Studies</a>
            </li>
            <li>
              <a href="#">Influencial figures</a>
            </li>
            <li>
              <a href="#">Martin Luther King</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <div className="box is-paddingless has-text-centered is-radiusless">
            <img src="/images/saved-packs/neil.svg" alt="neil" />
          </div>
          <ul>
            <li className="has-text-weight-bold">
              <a href="#">Science</a>
            </li>
            <li>
              <a href="#">Famous Scientists</a>
            </li>
            <li>
              <a href="#">Neil Armstrong</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <div className="box is-paddingless has-text-centered is-radiusless">
            <img src="/images/saved-packs/albert.svg" alt="albert" />
          </div>
          <ul>
            <li className="has-text-weight-bold">
              <a href="#">Science > Physics</a>
            </li>
            <li>
              <a href="#">Famous Scientists</a>
            </li>
            <li>
              <a href="#">Albert Einstein</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
);

export default SavedPacks;
