import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.a`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 20px;
  color: #fff;
`;

const Button = ({
  title,
  type,
  className,
  children,
  isTransparent,
  ...restProps
}) => {
  const classFinal = classNames(type, className, 'button');

  if (children) {
    return (
      <Wrapper className={classFinal} {...restProps}>
        {children}
      </Wrapper>
    );
  }
  return (
    <Wrapper className={classFinal} {...restProps}>
      {title}
    </Wrapper>
  );
};

Button.defaultProps = {
  className: '',
  title: '',
  children: '',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Button;
