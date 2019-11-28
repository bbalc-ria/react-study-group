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
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Comment />
        </Route>
        <Route exact path="/Gallery"><ImageGallery></ImageGallery></Route>
        <Route path="/login">{}</Route>
      </Switch>
    </Router>
  );
}



export default App;
