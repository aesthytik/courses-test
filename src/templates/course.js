import React from 'react';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import PackDescription from '../components/PackDescription';
import StudentActivities from '../components/StudentActivities';
import LearningObjAndOutcomes from '../components/LearningObjAndOutcomes';
import WorkbooksAndChecklists from '../components/WorkbooksAndChecklists';
import DownloadProjects from '../components/DownloadProjects';

export default class Course extends React.Component {
  render() {
    const { location, data } = this.props;
    const course = data.mongodbTestResources;
    return (
      <Layout location={location}>
        <Seo
          title="Individualpack"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <PackDescription course={course} />
        <StudentActivities />
        <LearningObjAndOutcomes />
        <WorkbooksAndChecklists />
        <DownloadProjects />
      </Layout>
    );
  }
}

export const query = graphql`
  query CourseByPath($slug: String!) {
    mongodbTestResources(slug: { eq: $slug }) {
      title
      slug
      isActive
      createdAt
    }
  }
`;
