import React from 'react';
import styled from 'styled-components';
import { HoverPrimaryButton } from '../elements/Hover';

const Container = styled.div`
  background-color: #fff;
  height: auto;
  padding: 5%;
  border-bottom: 2px solid #EDEDED;
  @media screen and (max-width: 600px) {
    font-size: 18px!important;
    text-align: center!important;
    
  }
}
`;

const DownloadProjects = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered">
          <HoverPrimaryButton
            className="primary-color has-text-weight-bold"
            height="79px"
            width="100%"
          >
            <img src="/images/apple-logo.svg" alt="apple" />{' '}
            &nbsp;&nbsp;&nbsp;DOWNLOAD PROJECT RESOURCES <br />
            FOR MAC APPS
          </HoverPrimaryButton>
        </div>
        <div className="column has-text-centered">
          <HoverPrimaryButton
            className="primary-color has-text-weight-bold"
            height="79px"
            width="100%"
          >
            <img src="/images/windows-logo.svg" alt="windows" />&nbsp;&nbsp;&nbsp;
            <div>
              DOWNLOAD PROJECT RESOURCES
              <br />FOR MICROSOFT OFFICE
            </div>
          </HoverPrimaryButton>
        </div>
      </div>
    </div>
  </Container>
);

export default DownloadProjects;
