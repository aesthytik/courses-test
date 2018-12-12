import React from 'react';
import styled from 'styled-components';
import Heading from '../elements/Heading';
import HighlightedText from '../elements/HighlightedText';

const Container = styled.section`
  background-color: #ffffff;
  height: auto;
  border-top: 2px solid #EDEDED;
  .progress-wrapper {
    display: flex;
    .progress {
      margin-right: 10px;
    }
  } 
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

const PackDescription = ({ course }) => (
  <Container className="section">
    <div className="container">
    <div className="progress-wrapper">
    <progress className="progress is-success" value="60" max="100">60%</progress>
    <span>60%</span>
    </div>
    
      <Heading className="has-text-grey">JAVASCRIPT</Heading>
      <h2 className="subtitle has-text-weight-semibold is-capitalized">
       Programming Language
      </h2>
      <div className="columns">
        <div className="column">
          <div className="content">
            <h3>
              <HighlightedText>Course description</HighlightedText>
            </h3>
            <p>
            Learn the JavaScript fundamentals you'll need for front-end or back-end development.
            Web pages are not the only place where JavaScript is used.
               Many desktop and server programs use JavaScript. Node.js is 
               the best known. Some databases, like MongoDB and CouchDB,
                also use JavaScript as their programming language.
            </p>
            <h3>
              <HighlightedText>Course tags +</HighlightedText>
              <br />
              <br />
              <div className="tags">
                {course.tags.map(tag => (
                  <span className="tag is-dark" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
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
