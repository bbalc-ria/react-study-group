import React from 'react';
import './App.css';
import TodoList from './todo-app/TodoList';
import TodoJsonList from './todo-app/TodoJsonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList items={TodoJsonList}/>
      </header>
    </div>
  );
}

export default App;
