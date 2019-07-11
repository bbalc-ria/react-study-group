import React from 'react';

const Item = ({ id, completed, name, handleChange }) => (
  <li>
    <input
      type="checkbox"
      id={id}
      checked={!completed}
      onChange={event => handleChange(event)}
    />
    <label htmlFor={id}>{name}</label>
  </li>
);

export default Item;
