import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import SavedPacks from '../components/SavedPacks';
import RecentPacks from '../components/RecentPacks';
import IndustryPacks from '../components/IndustryPacks';
import MultipleSlider from '../components/MultipleSlider';

export default class TeacherDashboard extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Learn Realm"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <SavedPacks />
        <RecentPacks />
        <IndustryPacks />
        {/* <MultipleSlider /> */}
      </Layout>
    );
  }
}
