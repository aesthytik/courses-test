import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import PostContainer from '../components/blog/PostContainer';

export default class Post extends React.Component {
  render() {
    const { location, data } = this.props;
    const post = data.mongodbTestBlog;
    return (
      <Layout location={location}>
        <Seo
          title="Individualpack"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <PostContainer post={post} />
      </Layout>
    );
  }
}

export const query = graphql`
  query PostByPath($slug: String!) {
    mongodbTestBlog(slug: { eq: $slug }) {
      title
      slug
      subTitle
      description
    }
  }
`;
