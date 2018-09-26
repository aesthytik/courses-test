import React from 'react';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import CreateResource from '../components/Dashboard/CreateResource';
import Resources from '../components/Dashboard/Resources';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to Learn Realm."
          url={`${config.siteUrl}`}
        />
        <div className="container">
          <div className="columns">
            <div className="column">
              <CreateResource />
            </div>
            <div className="column is-three-quarters">
              <Resources />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
