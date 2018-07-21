import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  height: auto;
`;

const SocialMediaIcons = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <a href="#">
        <i className="fab fa-twitter" />
      </a>
      <a href="#">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#">
        <i className="fab fa-instagram" />
      </a>
      <a href="#">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
  </Container>
);

export default SocialMediaIcons;
