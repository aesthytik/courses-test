import React from 'react';
import styled from 'styled-components';
import Heading from '../../elements/Heading';
import HighlightedText from '../../elements/HighlightedText';

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

const PostContainer = ({ post }) => (
  <Container className="section">
    <div className="container">
      <Heading className="has-text-grey">{post.title}</Heading>
      <h2 className="subtitle has-text-weight-semibold">{post.subTitle}</h2>
      <div className="columns">
        <div className="column">
          <div className="content">
            <h3>
              <HighlightedText>description</HighlightedText>
            </h3>
            <p>{post.description}</p>
          </div>
        </div>
        <div className="column">
          <img src="/images/youtube-video-embed.png" alt="youtube-embed" />
        </div>
      </div>
    </div>
  </Container>
);

export default PostContainer;
