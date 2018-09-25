import React from 'react';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import LeftContainer from '../components/Dashboard/LeftConatiner';
import RightContainer from '../components/Dashboard/RightContainer';

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
              <LeftContainer />
            </div>
            <div className="column is-three-quarters">
              <RightContainer />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}