import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Home from './home'
import BookDetail from './bookDetail'

const AppHeader = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function App() {
  return (
    <AppHeader>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/book/detail">
              <BookDetail/>
            </Route>
          </Switch>
      </Router>
    </AppHeader>
  );
}

export default App;
