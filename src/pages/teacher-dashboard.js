import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PacksList from '../components/PacksList';

const savedPacks = [
  {
    id: 1,
    title: 'Design Technology',
    field: 'Famour Designers',
    specification: 'Steve Jobs',
    image: '/images/saved-packs/steve-jobs.svg',
  },
  {
    id: 2,
    title: 'Social Studies',
    field: 'Influencial figures',
    specification: 'Martin Luther King',
    image: '/images/saved-packs/martin.svg',
  },
  {
    id: 3,
    title: 'Science',
    field: 'Famous Scientists',
    specification: 'Neil Armstrong',
    image: '/images/saved-packs/neil.svg',
  },
  {
    id: 4,
    title: 'Science > Physics',
    field: 'Famous Scientists',
    specification: 'Albert Einstein',
    image: '/images/saved-packs/albert.svg',
  },
  {
    id: 5,
    title: 'Physics',
    field: 'Space',
    specification: 'The Solar System',
    image: '/images/saved-packs/albert.svg',
  },
];

const recentPacks = [
  {
    id: 1,
    title: 'Science > Physics',
    field: 'Forces',
    specification: 'Air Resistance',
    image: '/images/recent-packs/air-resist.svg',
  },
  {
    id: 2,
    title: 'Art',
    field: 'Artist Research',
    specification: 'Pablo Picasso',
    image: '/images/recent-packs/pablo.svg',
  },
  {
    id: 3,
    title: 'Food Technology',
    field: 'Healthy Eating',
    specification: 'Calories',
    image: '/images/recent-packs/calories.svg',
  },
  {
    id: 4,
    title: 'Physics',
    field: 'Space',
    specification: 'The Solar System',
    image: '/images/recent-packs/solar.svg',
  },
  {
    id: 5,
    title: 'Physics',
    field: 'Space',
    specification: 'The Solar System',
    image: '/images/recent-packs/solar.svg',
  },
];

const industryPacks = [
  {
    id: 1,
    title: 'JCB',
    field: 'IT Technician',
    specification: 'Technical IT',
    image: '/images/industry-packs/jcb.svg',
  },
  {
    id: 2,
    title: 'Jaguar Landrover',
    field: 'Project Engineer',
    specification: 'Key Vehicle Systems',
    image: '/images/industry-packs/land-rover.svg',
  },
  {
    id: 3,
    title: 'Lloyds Bank',
    field: 'Life Skills',
    specification: 'Managing a budget',
    image: '/images/industry-packs/bank.svg',
  },
  {
    id: 4,
    title: 'Headspace',
    field: 'Life Skills',
    specification: 'Mindfulness',
    image: '/images/industry-packs/headspace.svg',
  },
  {
    id: 5,
    title: 'Physics',
    field: 'Space',
    specification: 'The Solar System',
    image: '/images/industry-packs/bank.svg',
  },
];

export default class TeacherDashboard extends React.Component {
  render () {
    // const pathName = global.location.pathname;
    return (
      <Layout>
        <Seo
          title="Learn Realm"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <PacksList
          title="My Saved Packs"
          bgColor="#ededed"
          packs={savedPacks}
        />
        <PacksList title="Recent Packs" bgColor="#d0e6f5" packs={recentPacks} />
        <PacksList
          title="Industry Packs"
          bgColor="#d5f3e5"
          packs={industryPacks}
        />
      </Layout>
    );
  }
}
