import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
  #box {
    width: 84%;
    position: relative;
  }
  #overlay {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    text-align: center;
    padding: 45px 0 66px 0;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
  }
  #box:hover #overlay {
    opacity: 1;
  }
`;

const PackItem = ({ item }) => (
  <Container>
    <div id="box">
      <img src={item.image} alt="steve-jobs" />
      <div id="overlay">
        <a href="#">
          <div className="text has-text-weight-bold">VIEW PACK</div>
        </a>
      </div>
    </div>
    <ul>
      <li className="has-text-weight-bold">
        <a href="#">{item.title}</a>
      </li>
      <li>
        <a href="#">{item.field}</a>
      </li>
      <li>
        <a href="#">{item.specification}</a>
      </li>
    </ul>
  </Container>
);

export default PackItem;
