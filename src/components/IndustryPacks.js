import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const Container = styled.div`
  background-color: #ededed;
  height: auto;
  padding: 3%;
  .columns {
    font-size: 1.5625rem;
  }
  .title {
    font-size: 2.8125rem !important;
  }
  li > a {
    color: #5a6175 !important;
    font-size: 1.5625rem;
  }
  ul {
    line-height: 2.5rem;
  }
  .box {
    position: relative;
    margin-top: 6%;
  }
  .image {
    display: block;
    width: 100%;
    height: auto;
  }
  .text {
    color: white;
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 20px;
    border-style: solid;
    border-color: #fccc63;
    border-width: 2px;
    padding: 6%;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: black;
  }
  .overlay:hover {
    opacity: 0.7;
  }
`;

export default class IndustryPacks extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <img src="/images/next.svg" />,
      prevArrow: <img src="/images/prev.svg" />,
    };
    return (
      <Container className="section">
        <div className="container">
          <h1 className="title has-text-grey">Industrial Packs</h1>
          <Slider {...settings}>
            <div className="column">
              <div className="box is-paddingless has-text-centered is-radiusless">
                <img
                  src="/images/saved-packs/steve-jobs.svg"
                  className="image"
                  alt="steve-jobs"
                />
                <div className="overlay">
                  <div className="text">VIEW PACK</div>
                </div>
              </div>
              <ul>
                <li className="has-text-weight-bold">
                  <a href="#">Design Technology</a>
                </li>
                <li>
                  <a href="#">Famous Designer</a>
                </li>
                <li>
                  <a href="#">Steve Jobs</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="box is-paddingless has-text-centered is-radiusless">
                <img
                  src="/images/saved-packs/martin.svg"
                  className="image"
                  alt="martin"
                />
                <div className="overlay">
                  <div className="text">VIEW PACK</div>
                </div>
              </div>
              <ul>
                <li className="has-text-weight-bold">
                  <a href="#">Social Studies</a>
                </li>
                <li>
                  <a href="#">Influencial figures</a>
                </li>
                <li>
                  <a href="#">Martin Luther King</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="box is-paddingless has-text-centered is-radiusless">
                <img
                  src="/images/saved-packs/neil.svg"
                  className="image"
                  alt="neil"
                />
                <div className="overlay">
                  <div className="text">VIEW PACK</div>
                </div>
              </div>
              <ul>
                <li className="has-text-weight-bold">
                  <a href="#">Science</a>
                </li>
                <li>
                  <a href="#">Famous Scientists</a>
                </li>
                <li>
                  <a href="#">Neil Armstrong</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="box is-paddingless has-text-centered is-radiusless">
                <img
                  src="/images/saved-packs/albert.svg"
                  className="image"
                  alt="albert"
                />
                <div className="overlay">
                  <div className="text">VIEW PACK</div>
                </div>
              </div>
              <ul>
                <li className="has-text-weight-bold">
                  <a href="#">Science > Physics</a>
                </li>
                <li>
                  <a href="#">Famous Scientists</a>
                </li>
                <li>
                  <a href="#">Albert Einstein</a>
                </li>
              </ul>
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
