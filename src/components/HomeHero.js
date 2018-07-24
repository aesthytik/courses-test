import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('images/hill-image.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  padding: 12%;
  .container {
    margin-top: -10%;
  }

  h2 {
    padding: 1%;
  }

  h2 + div {
    padding-top: 3%;
  }
`;

const BallonImage = styled.img`
  position: absolute;
  top: 20%;
  right: 7%;
`;

const SunImage = styled.img`
  position: absolute;
  top: -29%;
  right: 39%;
`;

const CloudImageOne = styled.img`
  position: absolute;
  top: 22%;
  right: 83%;
`;

const CloudImageTwo = styled.img`
position: absolute;
top: 27%;
right: 0%;
}
`;

const HeroBtn = styled.a`
  width: 17.75rem;
  height: 4.9375rem;
  border-radius: 1.25rem;
`;

const HomeHero = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <CloudImageTwo src="images/cloud.svg" alt="cloud" />
      <BallonImage src="images/air-baloon.svg" alt="air-balloon" />
      <SunImage src="images/sun-cloud.svg" alt="sun-cloud" />
      <CloudImageOne src="images/cloud.svg" alt="cloud" />

      <h1 className="title primary-font-color">
        Changing the landscape of education
      </h1>
      <h2 className="subtitle is-size-2  primary-font-color">
        Brilliant things happen in engaged minds
      </h2>
      <div>
        <HeroBtn className="button secondary-color is-large">
          <span className="is-size-6 has-text-white">SIGN UP FOR FREE</span>
        </HeroBtn>
        <br />
        <br />
        <HeroBtn className="button primary-color is-large">
          <span className="is-size-6 has-text-white">
            SUBSCRIBE FOR 40% OFF
          </span>
        </HeroBtn>
      </div>
    </div>
  </Container>
);

export default HomeHero;
