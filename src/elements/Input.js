import React from 'react';

const Input = ({ name, value, ...restProps }) => (
  <input name={name} value={value} {...restProps} />
);

export default Input;
