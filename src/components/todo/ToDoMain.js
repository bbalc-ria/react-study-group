import React, { useState } from "react";
import Input from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoFooter from "./ToDoFooter";

const filterTypes = {
  ALL: 0,
  ACTIVE: 1,
  COMPLETED: 2
};

export function ToDo (props){
  const [listTodos,setListTodos] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [customListTodos,setCustomListTodos] = useState([]);
  const [filterType,setFilterType] = useState(filterTypes.ALL);
 
  let AddTodo = text => {
    setListTodos([
      ...listTodos,
      { id: lastId, text, completed: false }
    ])
    setLastId(lastId+1);
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
    setListTodos(listTodos.filter(x=>!x.completed));
    refreshCustomList();
  };
  let handleChangeAll = () => {
    //TODO
    let nrOfCompletedTodos = customListTodos.filter(x => x.completed === true).length;

    let allCompleted = nrOfCompletedTodos === customListTodos.length || nrOfCompletedTodos===0;
    let newArray = [];
    if (allCompleted) {
      listTodos.forEach(element => {
        let newElement = { ...element, completed:!customListTodos[0].completed ?true: !listTodos[0] };
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
        <div className="full-body">
          <h1 className="title">ToDo</h1>
          <div className="list-wrapper">
            <div className="select-all">
              <button onClick={handleChangeAll}>SetAll</button>
            </div>
            <Input addTodo={AddTodo}></Input>

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
          </div>
        </div>
      </>
    );
  }

export default ToDo;
