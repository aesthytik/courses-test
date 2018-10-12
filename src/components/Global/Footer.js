import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SocialMediaIcons from '../SocialMediaIcons';
import Copyright from './Copyright';

const Container = styled.section`
  background-color: #fffff;
  h3 {
    padding-bottom: 1rem;
  }
  .footer-alignment {
    margin-left: 12%;
  }
  li > a {
    color: #5a6175 !important;
  }
  ul {
    line-height: 2.5rem;
  }
  .columns {
    @media only screen and (max-width: 400px) {
      text-align: center !important;
      margin-left: 0%;
    }
    @media only screen and (max-width: 768px) {
      text-align: center !important;
      margin-left: 0%;
    }
  }
  .column {
    padding: 0;
  }
`;

const Footer = () => (
  <Container className="section">
    <div className="container has-text-grey">
      <div className="columns is-desktop is-size-5 footer-alignment">
        <div className="column">
          <h3 className="has-text-weight-bold">Access Learn Realm</h3>
          <ul className="is-size-6 is-uppercase">
            <li>
              <Link to="/subscription">SUBSCRIBE</Link>
            </li>
            <li>
              <Link to="/page/access-for-teachers">ACCESS FOR TEACHERS</Link>
            </li>
            <li>
              <Link to="/page/access-for-students">ACCESS FOR STUDENTS</Link>
            </li>
            <li>
              <Link to="/page/access-for-parents">ACCESS FOR PARENTS</Link>
            </li>
            <li>
              <Link to="/page/access-for-schools">ACCESS FOR SCHOOLS</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="is-uppercase has-text-weight-bold">Partnerships</h3>
          <ul className="is-size-6 is-uppercase">
            <li>
              <Link to="/page/research-partners">RESEARCH PARTNERS</Link>
            </li>
            <li>
              <Link to="/page/brand-partners">BRAND PARTNERS</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="is-uppercase has-text-weight-bold">About us</h3>
          <ul className="is-size-6">
            <li>
              <Link to="/page/about-learn-realm">ABOUT LEARN REALM</Link>
            </li>
            <li>
              <Link to="/page/press/">PRESS</Link>
            </li>
            <li>
              <Link to="/page/careers/">CAREERS</Link>
            </li>
            <li>
              <Link to="/blog/">BLOG</Link>
            </li>
          </ul>
        </div>
        <div className="column is-lowercase">
          <h3 className="has-text-weight-bold is-uppercase">Support</h3>
          <ul className="is-size-6 is-uppercase">
            <li>
              <Link to="/page/help-centre/">Help center</Link>
            </li>
            <li>
              <Link to="/page/contact/">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
      <SocialMediaIcons />
      <Copyright />
    </div>
  </Container>
);

export default Footer;
