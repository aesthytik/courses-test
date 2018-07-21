import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
`;

const LoginBtn = styled.a`
  border-left: 1px solid #5a6175;
  padding-left: 16%;
  padding-right: 4%;
`;

const Header = () => (
  <Container class="section">
    <div className="container is-fullhd">
      <nav className="navbar " role="navigation" aria-label="main navigation">
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
          <div className="navbar-start">
            <a className="navbar-item">Foreword</a>
            <a className="navbar-item">Blog</a>
            <a className="navbar-item">Teachers</a>
            <a className="navbar-item">Freebies</a>
            <a className="navbar-item">Member's club</a>
          </div>

          <div className="navbar-end">
            <LoginBtn className="navbar-item is-uppercase">Login</LoginBtn>
            <a className="navbar-item">
              <Btn className="button is-rounded is-grey is-outlined is-large is-pulled-right">
                <span className="is-size-6">SIGN UP FOR FREE</span>
              </Btn>
            </a>
          </div>
        </LinkStyle>
      </nav>
    </div>
  </Container>
);

export default Header;
