import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../../utils/config';
import Header from './Header';
import Footer from './Footer';
import './layout.css';

const Container = styled.div``;

const IndexLayout = ({ children, location, navigate }) => (
  <div>
    <Helmet>
      <title>{config.siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>
    <Header path={location.pathname} navigate={navigate} />
    <Container>{children}</Container>
    <Footer />
  </div>
);

IndexLayout.defaultProps = {
  location: { pathname: '/' },
  navigate: () => console.log('nav'),
};

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
  location: PropTypes.object,
  navigate: PropTypes.func,
};

export default IndexLayout;
