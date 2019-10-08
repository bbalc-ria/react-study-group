import React, { useState } from "react";
import TodoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoFooter from "./ToDoFooter";
import * as S from './styles';

const filterTypes = {
  ALL: 0,
  ACTIVE: 1,
  COMPLETED: 2
};

export function ToDo(props) {
  const [listTodos, setListTodos] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [visibleListTodos, setCustomListTodos] = useState([]);
  const [filterType, setFilterType] = useState(filterTypes.ALL);

  let AddTodo = text => {
    setListTodos([
      ...listTodos,
      { id: lastId, text, completed: false }
    ])
    setLastId(lastId + 1);
    refreshCustomList();
  };

  let refreshCustomList = () => {

    switch (filterType) {
      case filterTypes.ALL:
        showAll();
        break;
      case filterTypes.ACTIVE:
        showActive();
        break;
      case filterTypes.COMPLETED:
        showCompleted();
        break;
      default:
        break;
    }
  };

  let changeCompleted = (id, value) => {
    let listTodosAux = listTodos;
    let index = listTodosAux.findIndex(x => x.id === id);
    listTodosAux[index].completed = value;
    setListTodos(listTodosAux);
    refreshCustomList()
  };

  let showAll = () => {
    setFilterType(filterTypes.ALL);
    setCustomListTodos(listTodos);
  };
  let showActive = () => {
    setFilterType(filterTypes.ACTIVE);
    setCustomListTodos(listTodos.filter(x => !x.completed));
  };
  let showCompleted = () => {
    setFilterType(filterTypes.COMPLETED);
    setCustomListTodos(listTodos.filter(x => x.completed));
  };
  let clearCompleted = () => {
    setListTodos(listTodos.filter(x => !x.completed));
    refreshCustomList();
  };
  let handleChangeAll = () => {
    //TODO
    let allSame = listTodos.filter(x => x.completed === true).length === listTodos.length || listTodos.filter(x => x.completed === true).length === 0;

    let newArray = [];

    if (allSame) {
      listTodos.forEach(element => {
        let newElement = { ...element, completed: !element.completed };
        newArray.push(newElement);
      });
    }
    else {
    }


    setListTodos(newArray);
    refreshCustomList();
  };


  return (
    <>
      <S.FullBody>
        <S.Title>ToDo</S.Title>
        <S.SelectAllButton onClick={handleChangeAll}>SetAll></S.SelectAllButton>

        <TodoInput addTodo={AddTodo}></TodoInput>

        <ToDoFooter
          total={listTodos.length}
          completed={
            listTodos.filter(x => x.completed === true).length
          }
          showAll={showAll}
          show={refreshCustomList}
          showActive={showActive}
          showCompleted={showCompleted}
          clear={clearCompleted}
        ></ToDoFooter>
        <ToDoList
          listTodos={visibleListTodos}
          changeCompleted={changeCompleted}
        >
          THERE is the List
            </ToDoList>
      </S.FullBody>

    </>
  );
}

export default ToDo;

