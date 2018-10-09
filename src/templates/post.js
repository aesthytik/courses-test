import React from 'react';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import PackDescription from '../components/PackDescription';
import StudentActivities from '../components/StudentActivities';
import LearningObjAndOutcomes from '../components/LearningObjAndOutcomes';
import WorkbooksAndChecklists from '../components/WorkbooksAndChecklists';
import DownloadProjects from '../components/DownloadProjects';

export default class Post extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <Seo
          title="Individualpack"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <PackDescription />
      </Layout>
    );
  }
}
