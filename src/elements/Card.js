import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   {
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: #fff;
  }
`;
const Card = ({ children, className, width, height, ...restProps }) => (
  <Wrapper
    className={`${className}`}
    width={width}
    height={height}
    {...restProps}
  >
    {children}
  </Wrapper>
);

export default Card;
