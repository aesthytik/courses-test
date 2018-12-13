import React from 'react';
import styled from 'styled-components';
import Card from '../elements/Card';
import HighlightedText from '../elements/HighlightedText';

const Wrapper = styled(Card)`
  position: relative;
  background-image: url('/images/pattern-bg.svg');
  background-size: cover;
  @media screen and (max-width: 375px) {
    margin-left: 11%;
  }
  .description {
    width: 55%;
  }

  div {
    position: absolute;
    background-color: #fff;
    top: 39%;
    left: 25%;
    sup {
      font-size: 0.5rem;
    }
  }
`;

const WorkbookAndChecklistItem = ({ title, url }) => (
  <div className="column has-text-centered">
    <Wrapper width="260px" height="418px">
      <a href={url} target="_blank">
        <div className="description">
          <span className="has-text-black">{title}</span>
          <br />

          <HighlightedText>
            <span className="has-text-white">
              Learn Realm<sup>TM</sup>
            </span>
          </HighlightedText>
        </div>
      </a>
    </Wrapper>
  </div>
);

export default WorkbookAndChecklistItem;
