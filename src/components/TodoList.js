import React from 'react';
import TodoData from '../data/todo.json';
import Item from './TodoItem.js';


const TodoList = () => (
  <ul>
    {
      TodoData.map((props) =>
        (<Item  {...props} />)
      )
    }
  </ul>
)

export default TodoList;