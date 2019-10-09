import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoMain from './components/todoMain';
import data from './json/items.json';

function App() {
  return (
    <div className="App">
      <br/>
      <TodoMain items={data} />
    </div>
  );
}

export default App;
