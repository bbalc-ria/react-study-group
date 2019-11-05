import React from "react";
// import "./App.css";
// import TodoList from "./todo-app/TodoList";
import { resources } from "./utils/Resources";
import { getListFromLocalStorage } from "./utils/Helpers";
import * as S from "./todo-app/styles";
// import Example1 from "./Example1";

function App() {
  //localStorage.setItem('todoJsonList', '');
  let persistedList = getListFromLocalStorage("todoJsonList");

  return (
    <S.Container className='container' todoItems={persistedList} title={resources.listTitle} />
  );
}

export default App;
