import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import PacksList from '../components/PacksList';

export default class Dashboard extends React.Component {
  render() {
    const { location, navigate, data } = this.props;

    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login/');
    }

    const resources = data.allMongodbLearnrealmResource.edges;

    return (
      <Layout location={location} navigate={navigate}>
        <Seo
          title="Dashboard"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <PacksList title="Recent Packs" bgColor="#ededed" packs={resources} />
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
