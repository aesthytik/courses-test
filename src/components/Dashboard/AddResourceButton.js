import React from 'react';
import Button from '../../elements/Button';

const AddResourceButton = ({ toggleModel }) => {
  console.log('addButton');
  return (
    <Button className="is-primary" title="Add Resource" onClick={toggleModel} />
  );
};

export default AddResourceButton;
