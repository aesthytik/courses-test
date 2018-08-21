import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PackDescription from '../components/PackDescription';
import StudentActivities from '../components/StudentActivities';
import LearningObjAndOutcomes from '../components/LearningObjAndOutcomes';
import WorkbooksAndChecklists from '../components/WorkbooksAndChecklists';
import DownloadProjects from '../components/DownloadProjects';

export default class IndividualPack extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <Seo
          title="Learn Realm"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <PackDescription />
        <StudentActivities />
        <LearningObjAndOutcomes />
        <WorkbooksAndChecklists />
        <DownloadProjects />
      </Layout>
    );
  }
}
