import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Buttons';

const Container = styled.div`
  background-color: #fff;
  height: auto;
  padding: 5%;
  @media screen and (max-width: 600px) {
    font-size: 18px!important;
    text-align: center!important;
    margin-top: 25px;
  }
}
`;

const DownloadProjects = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered">
          <Button
            className="primary-color has-text-weight-bold"
            height="79px"
            width="520px"
          >
            <img src="/images/apple-logo.svg" alt="apple" />{' '}
            &nbsp;&nbsp;&nbsp;DOWNLOAD PROJECT RESOURCES <br />
            FOR MAC APPS
          </Button>
        </div>
        <div className="column has-text-centered">
          <Button
            className="primary-color has-text-weight-bold"
            height="79px"
            width="520px"
          >
            <img src="/images/windows-logo.svg" alt="windows" />&nbsp;&nbsp;&nbsp;
            DOWNLOAD PROJECT RESOURCES
            <br />FOR MICROSOFT OFFICE
          </Button>
        </div>
      </div>
    </div>
  </Container>
);

export default DownloadProjects;
