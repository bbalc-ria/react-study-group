import React from 'react';
import TodoData from '../data/todo.json';
import TodoItem from './TodoItem.js';

const TodoList = () => (
  <ul>
    {
      TodoData.map((props) =>
        (<TodoItem  {...props} />)
      )
    }
  </ul>
)

export default TodoList;