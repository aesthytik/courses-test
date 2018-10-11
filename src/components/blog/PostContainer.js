import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Heading from '../../elements/Heading';

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
  <Container className="section has-text-centered">
    <div className="container">
      <Heading className="has-text-grey is-uppercase">{post.title}</Heading>
      <h2 className="subtitle has-text-weight-semibold">{post.subtitle}</h2>
      <span>{moment(post.createdAt).calendar()}</span>
      <br />
      <br />
      <div className="columns">
        <div className="column">
          <img src={post.image} alt={post.title} />
        </div>
      </div>
      <div className="column">
        <div className="content">
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  </Container>
);

export default PostContainer;
