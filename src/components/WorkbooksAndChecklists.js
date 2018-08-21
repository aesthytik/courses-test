import React from 'react';
import styled from 'styled-components';
import Card from '../elements/Card';
import HighlightedText from '../elements/HighlightedText';

const Container = styled.div`
  background-color: #ededed;
  height: auto;
  padding: 5%;
  @media screen and (max-width: 600px) {
    font-size: 18px!important;
    text-align: center!important;
    margin-top: 25px;
  }
}
`;

const Wrapper = styled(Card)`
  position: relative;
  background-image: url('/images/pattern-bg.svg');
  background-size: cover;
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

const WorkbooksAndChecklists = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <div className="subtitle has-text-weight-bold">
        Workbooks & Checklists
      </div>
      <p className="is-size-5">
        Click on images below to view the project workbooks &amp; checklists
        <br />
        Your students will be able to fill out all the information as you go
        along.
        <br />
        <HighlightedText>
          Save the PDFs individually or download all project resources at the
          bottom of the page
        </HighlightedText>
      </p>
      <br />
      <br />
      <div className="columns has-text-centered">
        <div className="column has-text-centered">
          <Wrapper width="260px" height="418px">
            <div>
              How have <br />
              Apple products <br />
              changed over time<br />
              <HighlightedText>
                Learn Realm<sup>TM</sup>
              </HighlightedText>
            </div>
          </Wrapper>
        </div>
        <div className="column has-text-centered">
          <Wrapper width="260px" height="418px">
            <div>
              How have <br />
              Apple products <br />
              changed over time<br />
              <HighlightedText>
                Learn Realm<sup>TM</sup>
              </HighlightedText>
            </div>
          </Wrapper>
        </div>
        <div className="column has-text-centered">
          <Wrapper width="260px" height="418px">
            <div>
              How have <br />
              Apple products <br />
              changed over time<br />
              <HighlightedText>
                Learn Realm<sup>TM</sup>
              </HighlightedText>
            </div>
          </Wrapper>
        </div>
        <div className="column has-text-centered">
          <Wrapper width="260px" height="418px">
            <div>
              How have <br />
              Apple products <br />
              changed over time<br />
              <HighlightedText>
                Learn Realm<sup>TM</sup>
              </HighlightedText>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  </Container>
);

export default WorkbooksAndChecklists;
