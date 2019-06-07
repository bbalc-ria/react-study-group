import React from 'react';

const TodoItem = ({ id, name, completed }) => (
  <li id={id}>
    <input type="checkbox" id={id} checked={completed} /> {name}
  </li>
);


export default TodoItem;