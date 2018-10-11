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

const PackDescription = ({ course }) => (
  <Container className="section">
    <div className="container">
      <Heading className="has-text-grey">{course.title}</Heading>
      <h2 className="subtitle has-text-weight-semibold is-capitalized">
        {course.category}
      </h2>
      <div className="columns">
        <div className="column">
          <div className="content">
            <h3>
              <HighlightedText>Project description</HighlightedText>
            </h3>
            <p>{course.description}</p>
            <h3>
              <HighlightedText>Project tags +</HighlightedText>
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
          <iframe
            title={course.name}
            width="100%"
            height="100%"
            src={course.videoEmbed}
          />
          {/* <img src="/images/youtube-video-embed.png" alt="youtube-embed" /> */}
        </div>
      </div>
    </div>
  </Container>
);

export default PackDescription;
