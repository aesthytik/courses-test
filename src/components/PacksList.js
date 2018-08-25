import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PackItem from './PackItem';
import Heading from '../elements/Heading';

const Container = styled.div`
  background-color: ${props => props.bgColor};
  height: auto;
  padding: 3%;

  li > a {
    color: #5a6175 !important;
    font-size: 1.5625rem;
  }
  ul {
    line-height: 2.5rem;
    padding-top: 4.8%;
  }
  .slick-next,
  .slick-prev {
    top: -14%;
    width: 82rem;
    height: 40px;
    margin: 0rem -39rem 1rem 39rem;
    @media screen and (max-width: 1470px) {
      margin: 0rem -34rem 0rem 33rem;
    }
    @media screen and (max-width: 1280px) {
      margin: 0rem -28rem 0rem 27rem;
    }
    @media screen and (min-width: 600px) and (max-width: 1023px) {
      visibility: hidden;
    }
    @media screen and (max-width: 375px) {
      visibility: hidden;
    }
  }
`;

const HeadingStyled = styled(Heading)`
  padding-bottom: 2.5rem;
  @media screen and (max-width: 375px) {
    padding-top: 2.5rem;
    padding-left: 1rem;
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      margin-left: 15%;
      padding-top: 3.5rem;
    }
  }
`;
export default class PacksList extends React.Component {
  render() {
    const { title, bgColor, packs } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      nextArrow: <img src="/images/next.svg" alt="next-arrow" />,
      prevArrow: <img src="/images/prev.svg" alt="prev-arrow" />,
    };

    return (
      <Container className="section" bgColor={bgColor}>
        <div className="container">
          <h1 className="has-text-grey">
            <HeadingStyled>{title}</HeadingStyled>
          </h1>
          <Slider {...settings}>
            {packs.map(pack => <PackItem key={pack.id} item={pack} />)}
          </Slider>
        </div>
      </Container>
    );
  }
}
