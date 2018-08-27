import React from 'react';
import styled from 'styled-components';
import SocialMediaIcons from '../SocialMediaIcons';
import Copyright from './Copyright';

const Container = styled.div`
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
              <a href="#">SUBSCRIBE</a>
            </li>
            <li>
              <a href="#">ACCESS FOR TEACHERS</a>
            </li>
            <li>
              <a href="#">ACCESS FOR STUDENTS</a>
            </li>
            <li>
              <a href="#">ACCESS FOR PARENTS</a>
            </li>
            <li>
              <a href="#">ACCESS FOR SCHOOLS</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="is-uppercase has-text-weight-bold">Partnerships</h3>
          <ul className="is-size-6 is-uppercase">
            <li>
              <a href="#">RESEARCH PARTNERS</a>
            </li>
            <li>
              <a href="#">BRAND PARTNERS</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="is-uppercase has-text-weight-bold">About us</h3>
          <ul className="is-size-6">
            <li>
              <a href="#">ABOUT LEARN REALM</a>
            </li>
            <li>
              <a href="#">PRESS</a>
            </li>
            <li>
              <a href="#">CAREERS</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </div>
        <div className="column is-lowercase">
          <h3 className="has-text-weight-bold is-uppercase">Support</h3>
          <ul className="is-size-6 is-uppercase">
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Contact us</a>
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
