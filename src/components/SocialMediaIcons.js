import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  height: auto;
  margin-top: 5%;
  div {
    justify-content: center;
    display: flex;
  }
`;

const SocialMediaIcon = styled.img`
  padding-right: 30%;
`;

const SocialMediaIcons = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <a href="#">
        <SocialMediaIcon src="/images/social-icons/youtube.svg" alt="youtube" />
      </a>
      <a href="#">
        <SocialMediaIcon src="/images/social-icons/twitter.svg" alt="twitter" />
      </a>
      <a href="#">
        <SocialMediaIcon
          src="/images/social-icons/facebook.svg"
          alt="facebook"
        />
      </a>
      <a href="#">
        <SocialMediaIcon
          src="/images/social-icons/instagram.svg"
          alt="instagram"
        />
      </a>
      <a href="#">
        <SocialMediaIcon
          src="/images/social-icons/linkedin.svg"
          alt="linkedin"
        />
      </a>
    </div>
  </Container>
);

export default SocialMediaIcons;
