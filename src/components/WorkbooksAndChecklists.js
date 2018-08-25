import React from 'react';
import styled from 'styled-components';
import HighlightedText from '../elements/HighlightedText';
import WorkbookAndChecklistItem from './WorkbookAndChecklistItem';

const Container = styled.div`
  background-color: #ededed;
  height: auto;
  padding: 5%;
  @media screen and (max-width: 600px) {
    font-size: 18px!important;
    text-align: center!important;
    
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
        <WorkbookAndChecklistItem />
        <WorkbookAndChecklistItem />
        <WorkbookAndChecklistItem />
        <WorkbookAndChecklistItem />
      </div>
    </div>
  </Container>
);

export default WorkbooksAndChecklists;
