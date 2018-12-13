import React from 'react';
import { graphql } from 'gatsby';
import { isUndefined } from 'lodash';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import PacksList from '../components/PacksList';

export default class Dashboard extends React.Component {
  render() {
    const { location, navigate, data } = this.props;

    const resources = data.allMongodbLearnrealmResource.edges || null;
    if (isUndefined(data.allMongodbLearnrealmResource)) {
      return <div>Loading......</div>;
    }
    return (
      <Layout>
        <Seo title="Dashboard" description="" url={`${config.siteUrl}`} />
        <PacksList title="Courses" bgColor="#ededed" packs={resources} />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMongodbLearnrealmResource(
      limit: 20
      sort: { fields: [createdAt], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
          isActive
          createdAt
        }
      }
    }
  }
`;
