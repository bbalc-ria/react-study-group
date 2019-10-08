import React from 'react';
import './App.css';
import ToDoList from './ToDoList/toDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          <ToDoList />
        }
      </header>
    </div>
  );
}

export default App;
