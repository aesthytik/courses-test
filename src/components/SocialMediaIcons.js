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

const SocialMediaIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: #1dbe71;
  margin-right: 1.5rem;

  .icons {
    font-size: 25px;
    margin-top: 0.7rem;
  }
`;

const SocialMediaIcons = () => (
  <Container className="section">
    <div className="has-text-centered">
      <SocialMediaIcon>
        <a href="#">
          <i className="fab fa-youtube has-text-white icons" />
        </a>
      </SocialMediaIcon>
      <SocialMediaIcon>
        <a href="#">
          <i className="fab fa-twitter has-text-white icons" />
        </a>
      </SocialMediaIcon>
      <SocialMediaIcon>
        <a href="#">
          <i className="fab fa-facebook-f has-text-white icons" />
        </a>
      </SocialMediaIcon>
      <SocialMediaIcon>
        <a href="#">
          <i className="fab fa-instagram has-text-white icons" />
        </a>
      </SocialMediaIcon>
      <SocialMediaIcon>
        <a href="#">
          <i className="fab fa-linkedin-in has-text-white icons" />
        </a>
      </SocialMediaIcon>
    </div>
  </Container>
);

export default SocialMediaIcons;
