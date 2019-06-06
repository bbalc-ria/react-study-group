import React from 'react';
import './App.css';
import TodoList from './todo-app/TodoList';
import {todoJsonList, resources} from './utils/data';

function App() {
  return (
    <div className="container">
      <div className="col-md-4 offset-md-4">
        <TodoList items={todoJsonList} title={resources.listTitle}/>
        </div>
    </div>
  );
}

export default App;
