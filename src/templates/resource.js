import React from 'react';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import PackDescription from '../components/PackDescription';
import StudentActivities from '../components/StudentActivities';
import LearningObjAndOutcomes from '../components/LearningObjAndOutcomes';
import WorkbooksAndChecklists from '../components/WorkbooksAndChecklists';
import DownloadProjects from '../components/DownloadProjects';

export default class Resource extends React.Component {
  render() {
    const { data } = this.props;
    const course = data.mongodbLearnrealmResource;

    return (
      <Layout>
        <Seo
        />
       
        <PackDescription course={course} />
        {/* <StudentActivities activities={course.activities} />
        <LearningObjAndOutcomes
          outcomes={course.outcomes}
          objectives={course.objectives}
        /> */}
        <WorkbooksAndChecklists />
      </Layout>
    );
  }
}

export const query = graphql`
  query CourseByPath($slug: String!) {
    mongodbLearnrealmResource(slug: { eq: $slug }) {
      id
      title
      slug
      description
      videoEmbed
      category
      tags
      outcomes
      objectives
      activities {
        name
        image
      }
      isActive
      createdAt
    }
    allMongodbLearnrealmChapters {
      edges {
        node {
          id
          title
          slug
          description
          videoEmbed
          isActive
          createdAt
        }
      }
    }
  }
`;
