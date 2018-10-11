import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PackItem from './PackItem';
import Heading from '../elements/Heading';

const Container = styled.section`
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
  .slick-prev {
    left: -50px;
    top: -15%;
    width: 2%;
    height: 40px;
    margin-left: 95%;
    @media screen and (max-width: 600px) {
      left: -20.5rem;
      top: 33%;
      width: 6%;
      margin-left: 95%;
      z-index: 1000;
    }
  }
  .slick-next {
    right: 7px;
    top: -15%;
    width: 2%;
    height: 40px;
    @media screen and (max-width: 600px) {
      width: 6%;
      right: 7px;
      top: 33%;
      height: 40px;
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
      padding-top: 4rem;
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
            {packs.map(pack => <PackItem key={pack.node.id} item={pack} />)}
          </Slider>
        </div>
      </Container>
    );
  }
}
