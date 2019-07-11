import React from 'react';
import './App.css';
import TodoList from './todo-app/TodoList';
import {resources} from './utils/Resources';
import {getListFromLocalstorage} from './utils/Helpers';

function App() {

  //localStorage.setItem('todoJsonList', '');
  let persistedList = getListFromLocalstorage('todoJsonList');

  return (
    <div className="container">
      <div className="col-md-4 offset-md-4">
        <TodoList items={persistedList} title={resources.listTitle}/>
      </div>
    </div>
  );
}

export default App;
