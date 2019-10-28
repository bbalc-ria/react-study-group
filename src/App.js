import React from 'react';
import styled from 'styled-components';
import ToDoList from './ToDoList/toDoList';

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
      <AppHeader>
          <ToDoList />
      </AppHeader>
  );
}

export default App;
