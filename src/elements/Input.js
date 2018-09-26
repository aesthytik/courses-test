import React from 'react';

const Input = ({ className, name, value, ...restProps }) => (
  <input
    className={`input ${className}`}
    name={name}
    value={value}
    {...restProps}
  />
);

export default Input;
