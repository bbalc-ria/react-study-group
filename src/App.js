import React from 'react';
import './App.css';
import ToDoList from './ToDoList/toDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          <ToDoList items={[{name:"name 1", complete:true, selected:true},{name:"name 2"}]} 
            itemCount={2} filterValue={"All"}/>
        }
      </header>
    </div>
  );
}

export default App;
