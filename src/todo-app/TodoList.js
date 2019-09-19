import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoItem from "./AddTodoItem";
import {
  getListFromLocalStorage,
  setListOnLocalStorage
} from "../../src/utils/Helpers";

const TodoList = (props) => {
  const [items, setItems] = useState(props.todoItems);

  const onAddItem = item => {
    let persistedList = getListFromLocalStorage("todoJsonList");
  
    // Get the highest existing id to compute the next id
    let itemIds = persistedList.map(item => item.id);
  
    let maxId = itemIds.length !== 0 ? Math.max(...itemIds) : 0;
  
    item.id = maxId + 1;
  
    persistedList.push(item);
    setItems(persistedList);
    setListOnLocalStorage("todoJsonList", persistedList);
  };

  const getListOfTodoItems = items => {
    let todoItems = items.map(todoItem => {
      const { id, title, isCompleted, dueDate } = todoItem;
      return (
        <TodoItem
          key={id}
          id={id}
          title={title}
          isCompleted={isCompleted}
          dueDate={dueDate}
        />
      );
    });
  
    todoItems.push(<AddTodoItem key={0} onAdd={onAddItem} />);
  
    return todoItems;
  };

  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <ul className="list-group">{getListOfTodoItems(items)}</ul>
    </React.Fragment>
  );
};

export default TodoList;
