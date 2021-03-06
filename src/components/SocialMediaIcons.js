import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #ffffff;
  height: auto;
  margin-top: 5%;
  div {
    justify-content: center;
    display: flex;
  }
  @media only screen and (max-width: 400px) {
    padding-left: 15%;
    padding-bottom: 10%;
  }
`;

const SocialMediaIcon = styled.img`
  padding-right: 30%;
`;

const SocialMediaIcons = () => (
  <Container className="section  has-text-centered">
    <div className="container">
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
