import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import config from '../../utils/config';

const Container = styled.section`
  padding: 3.75rem 0;
  .logo {
    height: 2.25rem;
    width: auto;
    @media only screen and (max-width: 1477px) {
      padding-left: 4% !important;
    }
    @media only screen and (max-width: 400px) {
      height: 28px;
      margin-left: 25%;
      margin-top: 4%;
    }
  }
  .menu-list {
    line-height: 4;
    padding-left: 33px;
    padding-right: 33px;
    margin-top: -15px;
    margin-bottom: 35px;
  }
`;

const LinkStyle = styled.div`
  width: 655px;
  height: 2.375rem;
  margin-left: 30%;
`;

const SignupBtn = styled.div`
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

const MobileMenu = styled.div`
  position: relative;
  left: 0px;
  top: 60px;
  height: auto;
  width: 100%;
  background-color: ${config.themeColor};
  z-index: 2;
  padding: 1rem;
  overflow: hidden;
  li {
    border-bottom: solid 1px white;
  }
  a {
    color: white;
  }
  a:hover {
    background-color: ${config.themeColor};
  }
  .menu-list a {
    padding: 0 0.75em;
  }
`;

const NavbarBurger = styled.a`
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 600px) {
    margin-top: 1.875rem;
    width: 26%;
    height: 44%;
    }
  }
`;

const UserQuery = gql`
  {
    isLoggedIn @client
    user @client {
      id
      email
      firstName
      lastName
    }
  }
`;
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      isActive: false,
    };
  }

  logout = () => {
    localStorage.clear();
    window.location = '/';
  };

  toggleMobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

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
                  EDU-LEARN
                </Link>

                <NavbarBurger
                  role="button"
                  className={
                    isActive ? 'is-active navbar-burger' : 'navbar-burger'
                  }
                  aria-label="menu"
                  aria-expanded="false"
                  onClick={this.toggleMobileMenu}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </NavbarBurger>
              </div>
              <Query query={UserQuery}>
                {({ loading, error, data }) => {
                  if (loading) return 'Loading...';
                  if (error) return `Error! ${error.message}`;
                  const { user, isLoggedIn } = data;

                  return (
                    <React.Fragment>
                      {isActive ? (
                        <MobileMenu className="is-hidden-desktop has-text-centered">
                          <aside className="menu">
                            <ul className="menu-list is-size-6">
                              {isLoggedIn ? (
                                <React.Fragment>
                                  <Link
                                    to="/"
                                    className="navbar-item primary-font-color"
                                  >
                                    Home
                                  </Link>
                                  <Link
                                    to="/dashboard"
                                    className="navbar-item primary-font-color"
                                  >
                                    Dashboard
                                  </Link>
                                  <Link
                                    to="/blog"
                                    className="navbar-item primary-font-color"
                                  >
                                    Blog
                                  </Link>
                                  <a
                                    className="navbar-item primary-font-color"
                                    type="button"
                                    onClick={this.logout}
                                  >
                                    logout
                                  </a>
                                  <Name className="navbar-item  has-text-weight-bold">
                                    {user.email}
                                  </Name>
                                  <Link
                                    to="/profile-update"
                                    className="navbar-item"
                                  >
                                    <img
                                      src="/images/admin-icon.svg"
                                      alt="admin"
                                    />
                                  </Link>
                                </React.Fragment>
                              ) : (
                                <React.Fragment>
                                  <Link to="/sign-up/">
                                    <li>Sign up for free</li>
                                  </Link>
                                  <Link to="/">
                                    <li>Subscribe</li>
                                  </Link>
                                  <Link to="/login/">
                                    <li>Login</li>
                                  </Link>
                                  <Link to="/">
                                    <li>Help</li>
                                  </Link>
                                </React.Fragment>
                              )}
                            </ul>
                          </aside>
                        </MobileMenu>
                      ) : null}
                      <LinkStyle className="navbar-menu">
                        <div className="navbar-end">
                          <div className="navbar-item">
                          Home
                          </div>
                          <div className="navbar-item">
                          Courses
                          </div>
                          <div className="navbar-item">
                          Login
                          </div>
                          <div className="navbar-item">
                          Register
                          </div>
                        </div>
                      </LinkStyle >
                    </React.Fragment>
                  );
                }}
              </Query>
            </nav>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
