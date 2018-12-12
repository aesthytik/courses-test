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

const WorkbookAndChecklistItem = ({title , url}) => (
  <div className="column has-text-centered">
    <Wrapper width="260px" height="418px">
    <a href="">
      <div className="description">
        {title}
        <br />
        <a href="">
          <HighlightedText>
            Learn Realm<sup>TM</sup>
          </HighlightedText>
        </a>
      </div>
      </a>
    </Wrapper>
  </div>
);

export default WorkbookAndChecklistItem;
