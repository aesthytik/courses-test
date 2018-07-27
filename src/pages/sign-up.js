import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import SignUpForm from '../components/SignUpForm';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Learn Realm"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <SignUpForm />
      </Layout>
    );
  }
}
