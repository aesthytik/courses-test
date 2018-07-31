import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const Container = styled.div`
  background-color: #d5f3e5;
  height: auto;
  padding: 3%;

  .title {
    font-size: 2.8125rem !important;
    margin-bottom: 0rem;
  }
  li > a {
    color: #5a6175 !important;
    font-size: 1.5625rem;
  }
  ul {
    line-height: 2.5rem;
    padding-top: 4.8%;
  }
  .box {
    margin-top: 6%;
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

  #box{
    width: 88%;
    position: relative;
  }
  #overlay {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;  
    background:rgba(0,0,0,.75);
    text-align:center;
    padding:45px 0 66px 0;
    opacity:0;
    -webkit-transition: opacity .25s ease;
  }
  #box:hover #overlay {
    opacity:1;
  }
`;

export default class IndustryPacks extends React.Component {
  render () {
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
          <h1 className="title has-text-grey">Industry Packs</h1>
          <Slider {...settings}>
            <div>
              <div id="box">
                <img
                  src="/images/saved-packs/steve-jobs.svg"
                  alt="steve-jobs"
                />
                <div id="overlay">
                  <div className="text has-text-weight-bold">VIEW PACK</div>
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
            <div>
              <div id="box">
                <img
                  src="/images/saved-packs/steve-jobs.svg"
                  alt="steve-jobs"
                />
                <div id="overlay">
                  <div className="text has-text-weight-bold">VIEW PACK</div>
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
            <div>
              <div id="box">
                <img
                  src="/images/saved-packs/steve-jobs.svg"
                  alt="steve-jobs"
                />
                <div id="overlay">
                  <div className="text has-text-weight-bold">VIEW PACK</div>
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
            <div>
              <div id="box">
                <img
                  src="/images/saved-packs/steve-jobs.svg"
                  alt="steve-jobs"
                />
                <div id="overlay">
                  <div className="text has-text-weight-bold">VIEW PACK</div>
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
            <div>
              <div id="box">
                <img
                  src="/images/saved-packs/steve-jobs.svg"
                  alt="steve-jobs"
                />
                <div id="overlay">
                  <div className="text has-text-weight-bold">VIEW PACK</div>
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
          </Slider>
        </div>
      </Container>
    );
  }
}
