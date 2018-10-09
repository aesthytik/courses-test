import React from 'react';
// import styled from 'styled-components';
import { Link } from 'gatsby';

const PostList = ({ post }) => (
  <div className="column is-one-third ">
    <Link to={`/blog/${post.slug}`}>
      <div className="box"> {post.title}</div>
    </Link>
  </div>
);

export default PostList;
