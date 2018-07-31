import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default class MultipleSlider extends React.Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    const Container = styled.div`
      background-color: #ffffff;
      height: auto;
      padding: 5%;
    `;
    return (
      <Container className="section">
        <div className="container has-text-centered">
          <h2> Multiple items </h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
              fcfdfdf∂
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
