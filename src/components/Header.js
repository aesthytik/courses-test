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
          <a className="navbar-item">Foreword</a>
          <a className="navbar-item">Blog</a>
          <a className="navbar-item">Teachers</a>
          <a className="navbar-item">Freebies</a>
          <a className="navbar-item">Members club</a>
          <a className="navbar-item">Login</a>
          <a className="navbar-item">Sign up for free</a>
        </LinkStyle>
      </nav>
    </div>
  </Container>
);

export default Header;
