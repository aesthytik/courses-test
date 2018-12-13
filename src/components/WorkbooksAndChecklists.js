import React from 'react';
import styled from 'styled-components';
import HighlightedText from '../elements/HighlightedText';
import WorkbookAndChecklistItem from './WorkbookAndChecklistItem';

const Container = styled.section`
  background-color: #ededed;
  height: auto;
  padding: 5%;
  @media screen and (max-width: 600px) {
    font-size: 18px !important;
    text-align: center !important;
  }
  .progress-wrapper {
    display: flex;
    margin-bottom: 2rem;
    .progress {
      margin-right: 10px;
    }
  }
`;

const WorkbooksAndChecklists = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <div className="subtitle has-text-weight-bold">CHAPTERS</div>
      <p className="is-size-5" />
      <br />
      <div className="progress-wrapper">
        <progress className="progress is-success" value="60" max="100">
          60%
        </progress>
        <span>60%</span>
      </div>
      <div className="columns has-text-centered is-multiline">
        <WorkbookAndChecklistItem
          title="1. Introduction to Microsoft Excel"
          url="https://www.youtube.com/watch?v=-ujVQzTtxSg"
        />
        <WorkbookAndChecklistItem
          title="2. Excel Data Validation, Filters, Grouping"
          url="https://www.youtube.com/watch?v=nMxl1_NAcxc"
        />
        <WorkbookAndChecklistItem
          title="3. Connecting Excel to External Data Sources"
          url="https://www.youtube.com/watch?v=ioIqA3h4pl0"
        />
        <WorkbookAndChecklistItem
          title="4. Introduction to Macros in Excel"
          url="https://www.youtube.com/watch?v=FGQ0P9jTjU0&list=PLWPirh4EWFpEFSYTbKaST6hSlgIFCJjU3"
        />
        <WorkbookAndChecklistItem
          title="5. First Visual Basic for Applications (VBA) in Excel"
          url="https://www.youtube.com/watch?v=bHwFTDp5g6A"
        />
        <WorkbookAndChecklistItem
          title="6. Excel VBA Call a Subroutine"
          url="https://www.youtube.com/watch?v=Bsfe-2VcvZg"
        />
        <WorkbookAndChecklistItem
          title="7. VBA Function Tutorial: Return, Call, Examples"
          url="https://www.youtube.com/watch?v=MTXBCvEJdlc"
        />
        <WorkbookAndChecklistItem
          title="8. VBA Range Objects"
          url="https://www.youtube.com/watch?v=acGJb9Oojho"
        />
      </div>
    </div>
  </Container>
);

export default WorkbooksAndChecklists;
