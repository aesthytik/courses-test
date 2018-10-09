import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'gatsby';

import { HoverSecondaryButton, HoverPrimaryButton } from '../../elements/Hover';

const Container = styled.section`
  background-image: url('/images/hill-image.svg');
  @media screen and (max-width: 375px) {
    background-image: url('/images/hill-image-mobile.svg');
  }
  background-repeat: no-repeat;
  background-position: bottom;
  padding-top: 14%;
  padding-bottom: 12%;
  @media screen and (max-width: 600px) {
    padding-top:6%!important;
    margin-top: 5%;
   }
   @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 25%;
    padding-top: 25%;
  }

  }
  .container {
    margin-top: -10%;
    @media screen and (max-width: 600px) {
      padding-bottom: 10%;
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
    top: 43%;
    right: 1%;
    height: 85px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    top: 50%;
    right: 4%;
    height: 50%;
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
  @media screen and (min-width: 768px) and (max-width: 1024px){
    top: -21%;
    right: 42%;
  }
}
`;

const CloudImageOne = styled.img`
  position: absolute;
  top: 22%;
  right: 83%;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 23%;
    right: 85%;
    height: 10px;
  }
}
`;

const CloudImageTwo = styled.img`
  position: absolute;
  top: 27%;
  right: 0%;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 60%;
    height: 13px;
    right: 85%;
  }
}
`;

const HeroSecondaryBtn = styled(HoverSecondaryButton)`
  @media screen and (max-width: 600px) {
    width: 67%;
    height: 3.9375rem;
    border-radius: 1rem;
  }
}
`;
const HeroPrimaryBtn = styled(HoverPrimaryButton)`
  @media screen and (max-width: 600px) {
    width: 67%;
    height: 3.9375rem;
    border-radius: 1rem;
  }
}
`;

const HomeHero = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <CloudImageTwo src="/images/cloud.svg" alt="cloud" />
      <BallonImage src="/images/air-baloon.svg" alt="air-balloon" />
      <SunImage src="/images/sun-cloud.svg" alt="sun-cloud" />
      <CloudImageOne src="/images/cloud.svg" alt="cloud" />

      <h1 className="title primary-font-color has-text-weight-bold">
        Changing the landscape of education
      </h1>
      <h2 className="subtitle is-size-3 has-text-weight-light primary-font-color">
        Brilliant things happen in engaged minds
      </h2>
      <div>
        <Link to="/sign-up/">
          <HeroSecondaryBtn
            className="secondary-color"
            height="4.9375rem"
            width="17.75rem"
          >
            <span className="is-size-6 has-text-white">SIGN UP FOR FREE</span>
          </HeroSecondaryBtn>
        </Link>

        <br />
        <br />
        <Link to="/">
          <HeroPrimaryBtn
            className="primary-color"
            height="4.9375rem"
            width="17.75rem"
          >
            <span className="is-size-6 has-text-white ">
              SUBSCRIBE FOR 40% OFF
            </span>
          </HeroPrimaryBtn>
        </Link>
      </div>
    </div>
  </Container>
);

export default HomeHero;
