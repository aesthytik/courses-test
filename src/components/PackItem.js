import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

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
    @media screen and (max-width: 375px) {
      padding-left: 12%;
    }
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
    @media screen and (max-width: 480px) {
      width: 79%;
    }
    @media screen and (max-width: 375px) {
      width: 86%;
    }
  }
  #box:hover #overlay {
    opacity: 1;
  }
`;

const ListStyled = styled.ul`
  @media screen and (max-width: 375px) {
    padding-left: 10%;
  }
`;

const PackItem = ({item}) => (
  <Container>
    <div id="box">
      <img src={item.image} alt="steve-jobs" />
      <div id="overlay">
        <Link to="/individual-pack/">
          <div className="text has-text-weight-bold">VIEW PACK</div>
        </Link>
      </div>
    </div>
    <ListStyled>
      <li className="has-text-weight-bold">
        <a href="#">{item.title}</a>
      </li>
      <li>
        <a href="#">{item.field}</a>
      </li>
      <li>
        <a href="#">{item.specification}</a>
      </li>
    </ListStyled>
  </Container>
);

export default PackItem;
