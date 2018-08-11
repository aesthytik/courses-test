/* global $ */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
  padding: 3.75rem 0;
  .logo {
    height: 2.25rem;
    width: auto;
    @media screen and (max-width: 600px) {
      height: 1.5rem;
      margin-left: 86px;
    }
  }
`;

const LinkStyle = styled.div`
  width: 655px;
  height: 2.375rem;
`;

const SignupBtn = styled.a`
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

const LoginBtn = styled(Link)`
  border-left: 1px solid #5a6175;
  padding-left: 7%;
`;

const Name = styled.div`
  border-left: 1px solid #5a6175;
  padding-left: 7%;
`;

const MobilMenu = styled.div`
  position: fixed;
  left: 0px;
  top: 161px;
  height: 100%;
  width: 100%;
  background-color: rgb(47, 47, 47);
  z-index: 2;
  padding: 2rem;
  overflow: hidden;
`;

const NavbarBurger = styled.a`
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 600px) {
      margin-top: 0.875rem;
      width: 26%;
      height: 50%;
    }
  }
`;

export default class Header extends React.Component {
  render() {
    const { path } = this.props;
    return (
      <React.Fragment>
        <Container class="section">
          <div className="container">
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    className="logo"
                    alt="learn realm logo"
                  />
                </Link>

                <NavbarBurger
                  role="button"
                  className="navbar-burger"
                  aria-label="menu"
                  aria-expanded="false"
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </NavbarBurger>
              </div>
              {/* <MobilMenu className="is-hidden-tablet">
                <aside className="menu">
                  <ul className="menu-list is-uppercase has-text-weight-bold is-size-4">
                    <li>adssf</li>
                    <li>adssf</li>
                    <li>adssf</li>
                    <li>adssf</li>
                    <li>adssf</li>
                    <li>adssf</li>
                  </ul>
                </aside>
              </MobilMenu> */}

              <LinkStyle className="navbar-menu">
                <div className="navbar-end">
                  {path !== '/teacher-dashboard' ? (
                    <React.Fragment>
                      <a className="navbar-item primary-font-color">Foreword</a>
                      <a className="navbar-item primary-font-color">Blog</a>
                      <a className="navbar-item primary-font-color">Teachers</a>
                      <a className="navbar-item primary-font-color">Freebies</a>
                      <a className="navbar-item primary-font-color">
                        Member's club
                      </a>
                      <LoginBtn
                        to="/login"
                        className="navbar-item is-uppercase has-text-weight-bold"
                      >
                        Log in
                      </LoginBtn>
                      <Link to="/sign-up" className="navbar-item">
                        <SignupBtn className="button is-rounded is-outlined is-large is-pulled-right is-hover">
                          <span className="is-size-6 has-text-weight-bold">
                            SIGN UP FOR FREE
                          </span>
                        </SignupBtn>
                      </Link>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <a className="navbar-item primary-font-color">Home</a>
                      <a className="navbar-item primary-font-color">Discover</a>
                      <Name className="navbar-item is-uppercase has-text-weight-bold">
                        #FNAME
                      </Name>
                      <Link to="/sign-up" className="navbar-item">
                        <img src="/images/admin-icon.svg" alt="admin" />
                      </Link>
                    </React.Fragment>
                  )}
                </div>
              </LinkStyle>
            </nav>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
