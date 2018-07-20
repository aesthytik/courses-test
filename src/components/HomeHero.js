import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: auto;
`;

const HeroBtn = styled.a`
  width: 17.75rem;
  height: 4.9375rem;
  border-radius: 1.25rem;
`;

const HomeHero = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <h1 className="title">Changing the landscape of education</h1>
      <h2 className="subtitle is-size-2">
        Brilliant things happen in engaged minds
      </h2>
      <HeroBtn className="button secondary-color is-large">
        <span className="is-size-6 has-text-white">SIGN UP FOR FREE</span>
      </HeroBtn>
      <br />
      <br />
      <HeroBtn className="button primary-color is-large">
        <span className="is-size-6 has-text-white">SUBSCRIBE FOR 40% OFF</span>
      </HeroBtn>
    </div>
  </Container>
);

export default HomeHero;
