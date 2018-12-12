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
        <WorkbookAndChecklistItem title="1. Learn JavaScript: Introduction" url="https://www.youtube.com/watch?v=W6NZfCO5SIk" />
        <WorkbookAndChecklistItem title="2. Learn JavaScript: Conditionals" url="https://www.youtube.com/watch?v=ZPpXJ3dk9gE" />
        <WorkbookAndChecklistItem title="3. Learn JavaScript: Functions" url="https://www.youtube.com/watch?v=uiv3oLsHbaI" />
        <WorkbookAndChecklistItem title="4. Learn JavaScript: Scope" url="https://www.youtube.com/watch?v=iJKkZA215tQ" />
        <WorkbookAndChecklistItem title="5. Learn JavaScript: Arrays" url="https://www.youtube.com/watch?v=BxFi7vVZx4s" />
        <WorkbookAndChecklistItem title="6. Learn JavaScript: Browser Compatibility" url="https://www.youtube.com/watch?v=FGAV4UMvedk" />
        <WorkbookAndChecklistItem title="7. Learn JavaScript:  Modules" url="https://www.youtube.com/watch?v=aWah7hLrSa8" />
        <WorkbookAndChecklistItem title="8. Learn JavaScript: Async-Await" url="https://www.youtube.com/watch?v=568g8hxJJp4" />
      </div>
    </div>
  </Container>
);

export default WorkbooksAndChecklists;
