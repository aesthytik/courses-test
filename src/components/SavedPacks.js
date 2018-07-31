import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const Container = styled.div`
  background-color: #ededed;
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
`;

export default class SavedPacks extends React.Component {
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
          <h1 className="title has-text-grey">My Saved Packs</h1>
          <Slider {...settings}>
            <div>
              <img src="/images/saved-packs/steve-jobs.svg" alt="steve-jobs" />
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
              <img src="/images/saved-packs/martin.svg" alt="martin" />

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
            <div>
              <img src="/images/saved-packs/neil.svg" alt="neil" />

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
            <div>
              <img src="/images/saved-packs/albert.svg" alt="albert" />

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
            <div>
              <img src="/images/saved-packs/albert.svg" alt="albert" />

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
