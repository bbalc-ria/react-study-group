import React, { useState } from "react";
import TodoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoFooter from "./ToDoFooter";
import styled from 'styled-components';

const filterTypes = {
  ALL: 0,
  ACTIVE: 1,
  COMPLETED: 2
};

export function ToDo(props) {
  const [listTodos, setListTodos] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [customListTodos, setCustomListTodos] = useState([]);
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
    let nrOfCompletedTodos = customListTodos.filter(x => x.completed === true).length;

    let allCompleted = nrOfCompletedTodos === customListTodos.length || nrOfCompletedTodos === 0;
    let newArray = [];
    if (allCompleted) {
      listTodos.forEach(element => {
        let newElement = { ...element, completed: !customListTodos[0].completed ? true : !listTodos[0] };
        newArray.push(newElement);
      });
      // } else 
      // if (nrOfCompletedTodos===0 || ){
      //   this.state.listTodos.forEach(element => {
      //     let newElement = { ...element, completed: true };
      //     newArray.push(newElement);
      // })
    }
    else {
      customListTodos.forEach(element => {
        let newElement = { ...element, completed: true };
        newArray.push(newElement);
      });
    }
    setListTodos(newArray);
    refreshCustomList();
  };


  return (
    <>
      <FullBody>
        <Title>ToDo</Title>
        <SelectAllButton onClick={handleChangeAll}>SetAll></SelectAllButton>

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
          listTodos={customListTodos}
          changeCompleted={changeCompleted}
        >
          THERE is the List
            </ToDoList>
      </FullBody>

    </>
  );
}
const Title = styled.h1`
    text-align: center;
  `;

const SelectAllButton = styled.button`
  float: left;
  opacity: 1;
  font-size: 3em;
`
const FullBody = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100%;
background: rgba(109, 130, 143, 0.1)`
export default ToDo;

