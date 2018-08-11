import React from 'react';
import styled from 'styled-components';
import SocialMediaIcons from './SocialMediaIcons';
import Copyright from './Copyright';

const Container = styled.div`
  background-color: #fffff;
  h3 {
    padding-bottom: 1rem;
  }
  .columns {
    margin-left: 12%;
    @media screen and (max-width: 600px) {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
  li > a {
    color: #5a6175 !important;
  }
  ul {
    line-height: 2rem;
  }
`;

const Footer = () => (
  <Container className="section">
    <div className="container is-fullhd has-text-grey">
      <div className="columns is-desktop is-size-5 ">
        <div className="column">
          <h3 className="is-uppercase has-text-weight-bold has-text-centered-mobile is-size-6-mobile">
            Access Learn Realm
          </h3>
          <ul className="is-size-6 is-uppercase has-text-centered-mobile is-size-7-mobile">
            <li>
              <a href="#">Subscribe</a>
            </li>
            <li>
              <a href="#">Access for teachers</a>
            </li>
            <li>
              <a href="#">Access for students</a>
            </li>
            <li>
              <a href="#">Access for Parents</a>
            </li>
            <li>
              <a href="#">Access for Schools</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="is-uppercase has-text-weight-bold has-text-centered-mobile is-size-6-mobile">
            Partnerships
          </h3>
          <ul className="is-size-6 is-uppercase has-text-centered-mobile is-size-7-mobile">
            <li>
              <a href="#">Reasearch Partners</a>
            </li>
            <li>
              <a href="#">Brand partners</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="is-uppercase has-text-weight-bold has-text-centered-mobile is-size-6-mobile">
            About us
          </h3>
          <ul className="is-size-6 is-uppercase has-text-centered-mobile is-size-7-mobile">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="column is-lowercase has-text-centered-mobile">
          <h3 className="has-text-weight-bold is-uppercase has-text-centered-mobile is-size-6-mobile">
            Support
          </h3>
          <ul className="is-size-6 is-uppercase has-text-centered-mobile is-size-7-mobile">
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
