import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PackItem from './PackItem';

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
    const Container = styled.div`
      background-color: ${bgColor};
      height: auto;
      padding: 3%;

      .title {
        font-size: 2.8125rem !important;
        margin-bottom: 0rem;
        @media screen and (max-width: 600px) {
          margin-top: 0.875rem;
          font-size: 2rem !important;
        }
      }
      li > a {
        color: #5a6175 !important;
        font-size: 1.5625rem;
      }
      ul {
        line-height: 2.5rem;
        padding-top: 4.8%;
      }
      .slick-next {
        top: -38.6rem;
        left: 82.5rem;
        position: relative;
        @media screen and (max-width: 600px) {
          top: -38.6rem;
          left: -17rem;
        }
      }
      .slick-prev {
        top: -1.54rem;
        left: 77rem;
        position: relative;
      }
      .slick-next,
      .slick-prev {
        width: 21px;
        height: 41px;
      }
    `;
    return (
      <Container className="section">
        <div className="container">
          <h1 className="title has-text-grey">{title}</h1>
          <Slider {...settings}>
            {packs.map(pack => <PackItem key={pack.id} item={pack} />)}
          </Slider>
        </div>
      </Container>
    );
  }
}
