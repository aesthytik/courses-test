import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import Heading from '../elements/Heading';

export default class Page extends React.Component {
  render() {
    const { data } = this.props;
    const page = data.mongodbLearnrealmPages;

    return (
      <Layout>
        <Seo
          title="Individualpack"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <div className="container">
          <Heading>{page.name}</Heading>
          <h3>{page.description}</h3>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query PageByPath($slug: String!) {
    mongodbLearnrealmPages(slug: { eq: $slug }) {
      id
      name
      slug
      description
    }
  }
`;
