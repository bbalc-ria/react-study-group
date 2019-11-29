import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/home";
import BookDetail from "./components/bookDetail/bookDetail";
import * as S from "./styles";
import MyBooks from "./components/topBar/myBooks";

function App() {
  return (
    <S.AppContainer>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mybooks">
            <MyBooks />
          </Route>
          <Route path="/book/detail/:bookId"  component={BookDetail}>
          </Route> />
        </Switch>
      </Router>
    </S.AppContainer>
  );
}

export default App;
