import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';
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

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      isActive: false,
    };
  }

  logout = () => {
    const { navigate } = this.props;
    localStorage.clear();
    navigate('/');
  };

  toggleMobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { path } = this.props;
    const { isActive } = this.state;

    let hasMemberIcon = false;
    if (path === '/teacher-dashboard/' || path === '/individual-pack/') {
      hasMemberIcon = true;
    }

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
              {isActive ? (
                <MobileMenu className="is-hidden-desktop has-text-centered">
                  <aside className="menu">
                    <ul className="menu-list is-size-6">
                      <Link to="/sign-up/">
                        <li>Sign up for free</li>
                      </Link>
                      <Link to="/">
                        <li>Subscribe</li>
                      </Link>
                      <Link to="/login/">
                        {' '}
                        <li>Login</li>
                      </Link>
                      <Link to="/">
                        {' '}
                        <li>Help</li>
                      </Link>
                    </ul>
                  </aside>
                </MobileMenu>
              ) : null}

              <LinkStyle className="navbar-menu">
                <div className="navbar-end">
                  {!hasMemberIcon ? (
                    <React.Fragment>
                      <a className="navbar-item primary-font-color">Foreword</a>
                      <Link
                        to="/blog"
                        className="navbar-item primary-font-color"
                      >
                        Blog
                      </Link>
                      <Link
                        to="/teacher-dashboard/"
                        className="navbar-item primary-font-color"
                      >
                        Teachers
                      </Link>
                      <a className="navbar-item primary-font-color">Freebies</a>
                      <a className="navbar-item primary-font-color">
                        Member's club
                      </a>
                      <LoginBtn
                        to="/login/"
                        className="navbar-item is-uppercase has-text-weight-bold"
                      >
                        Log in
                      </LoginBtn>
                      <Link to="/sign-up/" className="navbar-item">
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
                      <button
                        className="navbar-item primary-font-color"
                        type="button"
                        onClick={this.logout}
                      >
                        logout
                      </button>
                      <Name className="navbar-item is-uppercase has-text-weight-bold">
                        #FNAME
                      </Name>
                      <Link to="/sign-up/" className="navbar-item">
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
