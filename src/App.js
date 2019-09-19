import React from "react";
import "./App.css";
import TodoList from "./todo-app/TodoList";
import { resources } from "./utils/Resources";
import { getListFromLocalStorage } from "./utils/Helpers";
import Example1 from "./Example1";

function App() {
  //localStorage.setItem('todoJsonList', '');
  let persistedList = getListFromLocalStorage("todoJsonList");

  return (
    <div className="container">
      <div className="col-md-4 offset-md-4">
        <TodoList todoItems={persistedList} title={resources.listTitle} />
      </div>
    </div>
  );
}

export default App;
