import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
  padding: 60px 0;
  .logo {
    height: 36px;
    width: auto;
  }
`;

const LinkStyle = styled.div`
  width: 655px;
  height: 38px;
`;

const Btn = styled.a`
  border-width: 0.2rem;
  color: #1dbe71;
  border-color: #1dbe71;
  transition: 0.3s;
  padding: 2.5rem 3.5rem !important;
  :hover {
    border-color: ${darken(0.2, '#1dbe71')} !important;
    color: ${darken(0.2, '#1dbe71')} !important;
  }
`;

const LoginBtn = styled.a`
  border-left: 1px solid #5a6175;
  padding-left: 1%;
  a {
    width: 5rem;
    font-size: 17px;
    margin-left: 25%;
  }
`;

const Header = () => (
  <Container class="section">
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="/images/logo.png"
              className="logo"
              alt="learn realm logo"
            />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <LinkStyle className="navbar-menu">
          <div className="navbar-start is-size-6">
            <a className="navbar-item primary-font-color">Foreword</a>
            <a className="navbar-item primary-font-color">Blog</a>
            <a className="navbar-item primary-font-color">Teachers</a>
            <a className="navbar-item primary-font-color">Freebies</a>
            <a className="navbar-item primary-font-color">Member's club</a>
          </div>

          <div className="navbar-end">
            <LoginBtn>
              <Link to="/login" className="navbar-item is-uppercase">
                Log in
              </Link>
            </LoginBtn>

            <Link to="/sign-up" className="navbar-item">
              <Btn className="button is-rounded is-outlined is-large is-pulled-right is-hover">
                <span className="is-size-6 has-text-weight-bold">
                  SIGN UP FOR FREE
                </span>
              </Btn>
            </Link>
          </div>
        </LinkStyle>
      </nav>
    </div>
  </Container>
);

export default Header;
