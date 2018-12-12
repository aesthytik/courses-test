import React from 'react';
import styled from 'styled-components';
import HighlightedText from '../elements/HighlightedText';
import WorkbookAndChecklistItem from './WorkbookAndChecklistItem';

const Container = styled.section`
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
        CHAPTERS
      </div>
      <p className="is-size-5">
      </p>
      <br />
    
      <div className="columns has-text-centered is-multiline">
        <WorkbookAndChecklistItem title="1. Learn JavaScript: Introduction" />
        <WorkbookAndChecklistItem title="2. Learn JavaScript: Conditionals" />
        <WorkbookAndChecklistItem title="3. Learn JavaScript: Functions" />
        <WorkbookAndChecklistItem title="4. Learn JavaScript: Scope" />
        <WorkbookAndChecklistItem title="5. Learn JavaScript: Arrays" />
        <WorkbookAndChecklistItem title="6. Learn JavaScript: Browser Compatibility" />
        <WorkbookAndChecklistItem title="7. Learn JavaScript:  Modules" />
        <WorkbookAndChecklistItem title="8. Learn JavaScript: Async-Await" />
      </div>
    </div>
  </Container>
);

export default WorkbooksAndChecklists;
