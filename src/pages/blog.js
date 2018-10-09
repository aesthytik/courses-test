import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import PostList from '../components/blog/PostList';

export default class Post extends React.Component {
  render() {
    const {
      location,
      data: { allMongodbTestBlog },
    } = this.props;
    const blog = allMongodbTestBlog.edges;
    return (
      <Layout location={location}>
        <Seo
          title="Individualpack"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <div className="container">
          <div className="columns is-multiline">
            {blog.map(post => <PostList post={post.node} key={post.node.id} />)}
          </div>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMongodbTestBlog {
      edges {
        node {
          id
          title
          slug
          subTitle
          description
        }
      }
    }
  }
`;
