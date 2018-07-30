import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { darken } from 'polished';

const Container = styled.div`
  background-color: #ededed;
  padding: 5%;
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
    padding-bottom: 4rem;
  }
  .login-btn {
    :hover {
      background-color: ${darken(0.2, '#1dbe71')} !important;
    }
  }
  .fb-login-btn {
    :hover {
      background-color: ${darken(0.2, '#7ebce6')} !important;
    }
  }
`;

const LoginBtn = styled.a`
  width: 100%;
  height: 4.9375rem;
  border-radius: 1.25rem;
  + div {
    color: #5a6175;
  }
`;

const Text = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
`;

const AlignContainer = styled.div`
  width: 34.33%;
`;

const GreenBalloonBig = styled.img`
  position: absolute;
  top: 44%;
  right: -68%;
`;

const BlueGreenBalloon = styled.img`
  position: absolute;
  top: 12%;
  right: -63%;
`;

const BlueLightGreenBalloon = styled.img`
  position: absolute;
  top: 59%;
  right: 116%;
`;

const GreenOrangeBalloon = styled.img`
  position: absolute;
  top: 18%;
  right: 120%;
`;

const LoginForm = () => (
  <Container className="section">
    <AlignContainer className="container is-fullhd has-text-grey is-hidden-mobile">
      <div className="columns is-desktop is-size-6">
        <GreenBalloonBig
          src="/images/green-balloon-big.svg"
          alt="green-balloon-big"
        />
        <BlueGreenBalloon
          src="/images/blue-green-balloon.svg"
          alt="blue-green-balloon"
        />
        <BlueLightGreenBalloon
          src="/images/blue-lightgreen-balloon.svg"
          alt="blue-lightgreen-balloon"
        />
        <GreenOrangeBalloon
          src="/images/green-orange-balloon.svg"
          alt="green-orange-balloon"
        />
        <div className="column">
          <div className="box">
            <div className="has-text-centered has-text-weight-bold is-size-4">
              Login
            </div>
            <br />
            <div className="has-text-centered has-text-weight-light is-size-6">
              NEW TO LEARN REALM?{' '}
              <Link to="/sign-up">
                <span>&nbsp; SIGN UP FOR FREE</span>
              </Link>
            </div>
            <br />
            <br />
            <form>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-large"
                    type="text"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-large"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <Text className="is-pulled-right has-text-lightgrey is-uppercase">
                  Forgot?
                </Text>
              </div>
              <br />
              <label className="checkbox">
                <input type="checkbox" />
                <span className="has-text-lightgrey"> REMEMBER ME</span>
              </label>
              <br />
              <br />
              <LoginBtn className="button primary-color is-large has-text-centered login-btn">
                <span className="is-size-6 has-text-white">LOG IN</span>
              </LoginBtn>
              <Text className="has-text-centered">OR</Text>
              <LoginBtn className="button secondary-color is-large has-text-centered fb-login-btn">
                <span className="is-size-6 has-text-white">
                  LOG IN WITH FACEBOOK
                </span>
              </LoginBtn>
            </form>
          </div>
        </div>
      </div>
    </AlignContainer>
    <div className="container is-fullhd is-hidden-desktop">
      <div className="columns is-desktop is-size-6">
        <div className="column">
          <div className="box">
            <div className="has-text-centered has-text-weight-bold is-size-4">
              Login
            </div>
            <br />
            <div className="has-text-centered has-text-weight-light is-size-6">
              NEW TO LEARN REALM? <span> &nbsp;SIGN UP FOR FREE</span>
            </div>
            <br />
            <br />
            <form>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-large"
                    type="text"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-large"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <Text className="is-pulled-right has-text-lightgrey is-uppercase">
                  Forgot?
                </Text>
              </div>
              <br />
              <label className="checkbox">
                <input type="checkbox" />
                <span className="has-text-lightgrey"> REMEMBER ME</span>
              </label>
              <br />
              <br />
              <LoginBtn className="button primary-color is-large has-text-centered login-btn">
                <span className="is-size-6 has-text-white">LOG IN</span>
              </LoginBtn>
              <Text className="has-text-centered">OR</Text>
              <LoginBtn className="button secondary-color is-large has-text-centered fb-login-btn">
                <span className="is-size-6 has-text-white">
                  LOG IN WITH FACEBOOK
                </span>
              </LoginBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default LoginForm;
