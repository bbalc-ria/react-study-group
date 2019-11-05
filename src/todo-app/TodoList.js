import React, { useState, Fragment } from "react";
import * as S from "./styles";
import TodoItem from "./TodoItem";
import AddTodoItem from "./AddTodoItem";
import {
  getListFromLocalStorage,
  setListOnLocalStorage
} from "../../src/utils/Helpers";
import Filters from "./Filters";

const TodoList = props => {
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

  const onActiveFilter = () => {
    let persistedList = getListFromLocalStorage("todoJsonList");
    let activeItems = persistedList.filter(item => !item.isCompleted);
    setItems(activeItems);
    setListOnLocalStorage("todoJsonList", persistedList);
  };

  const onCompletedFilter = () => {
    let persistedList = getListFromLocalStorage("todoJsonList");
    let activeItems = persistedList.filter(item => item.isCompleted);
    setItems(activeItems);
    setListOnLocalStorage("todoJsonList", persistedList);
  };

  const onAllFilter = () => {
    let persistedList = getListFromLocalStorage("todoJsonList");
    setItems(persistedList);
    setListOnLocalStorage("todoJsonList", persistedList);
  };

  const getListOfTodoItems = items => {
    let addComponent = <AddTodoItem key={-1} onAdd={onAddItem} />;
    let filtersComponent = (
      <Filters
        key={-2}
        onActiveFilter={onActiveFilter}
        onCompletedFilter={onCompletedFilter}
        onAllFilter={onAllFilter}
      ></Filters>
    );

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

    let displayItems = [addComponent, ...todoItems, filtersComponent];

    return displayItems;
  };

  return (
    <div className={props.className}>
      <S.Title>{props.title}</S.Title>
      <S.ListGroup>{getListOfTodoItems(items)}</S.ListGroup>
    </div>
  );
};

export default TodoList;
