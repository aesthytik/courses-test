import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Global/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet title="NOT FOUND" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
