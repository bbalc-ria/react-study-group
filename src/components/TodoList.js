import React from 'react';
import TodoData from '../data/todo.json';
import Item from './TodoItem.js';

let rebuiltList = [...TodoData];
const TodoList = () => {

  const handleChange = (event) => {
    console.log(event.target.id);
    let clickedItem = rebuiltList.find(todo => { return todo.id == event.target.id });
    clickedItem.completed = event.target.checked;
    rebuiltList = [...rebuiltList, clickedItem]
    console.log(rebuiltList);
    console.log(clickedItem);
  };
  console.log("in todolist", rebuiltList);
  return (
    <ul>
      {
        rebuiltList.map((todoitem) =>
          (<Item handleChange={handleChange} key={todoitem.id} id={todoitem.id} name={todoitem.name} completed={todoitem.completed} />)
        )
      }
    </ul>
  )
}


export default TodoList;