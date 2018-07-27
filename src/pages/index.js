import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import Testimonial from '../components/Testimonial';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Learn Realm"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <HomeHero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Testimonial />
      </Layout>
    );
  }
}
