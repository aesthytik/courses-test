import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import SignUpForm from '../components/Forms/SignUpForm';
import SignupInfo from '../components/SignupInfo';

const Container = styled.div`
  background-color: #ededed;
  padding: 8%;
  .field:not(:last-child) {
    margin-bottom: 7%;
    color: #5a6175;
  }
  span {
    color: #1dbe71;
  }
  h1 {
    color: #5a6175;
    font-size: 2.8125rem;
  }
  .input {
    border-radius: 0px;
    padding-left: 0rem;
    border-bottom-width: 2px;
    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
  .box {
    background-color: #fff;
    border-radius: 0px;
    box-shadow: 0 0px 0px rgba(10, 10, 10, 0.1), 0 0 0 rgba(10, 10, 10, 0.1);
    color: #5a6175 !important;
    display: block;
    padding-top: 2.7rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2.7rem;
  }
  .get-started-button {
    :hover {
      background-color: ${darken(0.2, '#1dbe71')} !important;
    }
  }
  .sign-up-btn {
    :hover {
      background-color: ${darken(0.2, '#7ebce6')} !important;
    }
  }
`;

export default class SignUpPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Signup"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <Container className="section">
          <div className="container has-text-grey">
            <div className="columns is-tablet is-size-6">
              <SignupInfo />
              <SignUpForm />
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
