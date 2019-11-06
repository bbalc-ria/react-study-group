import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/home";
import BookDetail from "./components/bookDetail";
import * as S from "./styles";

function App() {
  return (
    <S.AppContainer>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/book/detail/:bookId" component={BookDetail} />
        </Switch>
      </Router>
    </S.AppContainer>
  );
}

export default App;
