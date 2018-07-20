import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  height: auto;
`;

const SocialMediaIcons = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <i className="fab fa-twitter" />
      <i className="fab fa-facebook-f" />
      <i className="fab fa-instagram" />
      <i className="fab fa-linkedin-in" />
    </div>
  </Container>
);

export default SocialMediaIcons;
