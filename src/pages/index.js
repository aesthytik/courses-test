import React from 'react';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import HomeHero from '../components/Home/HomeHero';
import SectionOne from '../components/Home/SectionOne';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';
import SectionFour from '../components/Home/SectionFour';
import Testimonial from '../components/Home/Testimonial';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to Learn Realm."
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
