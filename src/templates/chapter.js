import React from 'react';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
// import PackDescription from '../components/PackDescription';

export default class Chapter extends React.Component {
  render() {
    const { location, data } = this.props;
    const chapter = data.mongodbLearnrealmChapters;
    return (
      <Layout location={location}>
        <Seo
          title="Individualpack"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        hello
      </Layout>
    );
  }
}

export const query = graphql`
  query ChapterByPath($slug: String!) {
    mongodbLearnrealmChapters(slug: { eq: $slug }) {
      id
      title
      slug
      description
      videoEmbed
      isActive
      createdAt
    }
  }
`;
