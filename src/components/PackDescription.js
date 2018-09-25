import React from 'react';
import styled from 'styled-components';
import Heading from '../elements/Heading';
import HighlightedText from '../elements/HighlightedText';

const Container = styled.section`
  background-color: #ffffff;
  height: auto;
  border-top: 2px solid #EDEDED;
  @media screen and (max-width: 600px) {
    font-size: 18px!important;
    text-align: center!important;
    margin-top: 25px;
  }
  .content {
    padding: 2rem 0rem;
   
    line-height: 1.67rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .subtitle {
    color: #5a6175 !important;
  }
}
`;

const PackDescription = () => (
  <Container className="section">
    <div className="container">
      <Heading className="has-text-grey">Steve Jobs</Heading>
      <h2 className="subtitle has-text-weight-semibold">
        Design Technology > Famous Designers
      </h2>
      <div className="columns">
        <div className="column">
          <div className="content">
            <h3>
              <HighlightedText>Project description</HighlightedText>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
              suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
              Felis bibendum ut tristique et egesta.
              <br />
              <br /> Dictum at tempor commodo ullamcorper a lacus vestibulum. In
              iaculis nunc sed augue lacus. Blandit libero volutpat sed cras.
              Dictum at tempor commodo ullamcorper a lacus vestibulum. In
              iaculis nunc sed augue lacus. Blandit libero volutpat sed cras.{' '}
            </p>
            <h3>
              <HighlightedText>Project tags +</HighlightedText>
            </h3>
          </div>
        </div>
        <div className="column">
          <img src="/images/youtube-video-embed.png" alt="youtube-embed" />
        </div>
      </div>
    </div>
  </Container>
);

export default PackDescription;