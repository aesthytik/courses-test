import React from 'react';
// import styled from 'styled-components';
import { Link } from 'gatsby';
import moment from 'moment';

const PostList = ({ post }) => (
  <div className="column is-one-third ">
    <Link to={`/blog/${post.slug}`}>
      <div className="box">
        <img src={post.image} alt={post.title} />
        <br />
        <br />
        <h2 className="subtitle has-text-weight-semibold is-capitalized">
          {post.title}
        </h2>
        <span className=" has-text-weight-semibold">{post.subtitle}</span>
        <br />
        <span>{moment(post.createdAt).calendar()}</span>
      </div>
    </Link>
  </div>
);

export default PostList;
