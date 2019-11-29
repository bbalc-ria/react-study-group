import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PlaceMain from './components/PlacePage/PlaceMain';
import ImageGallery from './components/PlacePage/ImageGallery';
import Comment from './components/Resuables/Comments/Comment';
import SearchPage from "../src/components/SearchPage/SearchPage"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PlaceMain />
        </Route>
        <Route exact path="/Gallery"><ImageGallery></ImageGallery></Route>
        <Route path="/login">{}</Route>
      </Switch>
    </Router >
  );
}



export default App;
