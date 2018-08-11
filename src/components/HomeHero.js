import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
  background-image: url('/images/hill-image.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  padding-top: 14%;
  padding-bottom: 12%;
  @media screen and (max-width: 600px) {
    padding-top:6%!important;
   }
  }
  .container {
    margin-top: -10%;
    @media screen and (max-width: 600px) {
      padding-bottom: 60%;
      margin-top: -10%;
    }
  }

  h1 {
    padding: 0%;
    @media screen and (max-width: 600px) {
      font-size: 2.0625rem !important;
      line-height: 2.6875rem;
      font-weight: 600 !important;
    }
  }

  h2 {
    padding: 1%;
    @media screen and (max-width: 600px) {
      font-size: 20px !important;
    }
  }

  h2 + div {
    padding-top: 3%;
    @media screen and (max-width: 600px) {
      padding-top: 12%;
    }
  }

  .sign-btn {
    :hover {
      background-color: ${darken(0.2, '#7ebce6')} !important;
    }
  }

  .subscribe-btn {
    :hover {
      background-color: ${darken(0.2, '#1dbe71')} !important;
    }
  }

  .subtitle {
    margin-top: -0.75rem !important;
  }
`;

const BallonImage = styled.img`
  position: absolute;
  top: 20%;
  right: 7%;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 28%;
    right: 1%;
    height: 85px;
  }
}
`;

const SunImage = styled.img`
  position: absolute;
  top: -29%;
  right: 39%;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: -8%;
    right: 6%;
    height: 3.125rem;
  }
}
`;

const CloudImageOne = styled.img`
  position: absolute;
  top: 22%;
  right: 83%;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 14%;
    right: 76%;
    height: 17px;
  }
}
`;

const CloudImageTwo = styled.img`
  position: absolute;
  top: 27%;
  right: 0%;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 30%;
    height: 1.3125rem;
    right: 72%;

  }
}
`;

const HeroBtn = styled.a`
  width: 17.75rem;
  height: 4.9375rem;
  border-radius: 1.25rem;
  @media screen and (max-width: 600px) {
    width: 67%;
    height: 3.9375rem;
  }
}
`;

const HomeHero = () => (
  <Container className="section">
    <div className="container has-text-centered is-fullhd">
      <CloudImageTwo src="/images/cloud.svg" alt="cloud" />
      <BallonImage src="/images/air-baloon.svg" alt="air-balloon" />
      <SunImage src="/images/sun-cloud.svg" alt="sun-cloud" />
      <CloudImageOne src="/images/cloud.svg" alt="cloud" />

      <h1 className="title primary-font-color has-text-weight-light">
        Changing the landscape of education
      </h1>
      <h2 className="subtitle is-size-3 has-text-weight-light primary-font-color">
        Brilliant things happen in engaged minds
      </h2>
      <div>
        <HeroBtn className="button secondary-color is-large sign-btn">
          <span className="is-size-6 has-text-white">SIGN UP FOR FREE</span>
        </HeroBtn>
        <br />
        <br />
        <HeroBtn className="button primary-color is-large subscribe-btn">
          <span className="is-size-6 has-text-white ">
            SUBSCRIBE FOR 40% OFF
          </span>
        </HeroBtn>
      </div>
    </div>
  </Container>
);

export default HomeHero;
