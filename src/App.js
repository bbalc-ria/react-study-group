import React, { createContext, useState, useContext } from "react";
import PlaceMain from "./components/PlacePage/PlaceMain";
import ImageGallery from "./components/PlacePage/ImageGallery";
import SearchPage from "../src/components/SearchPage/SearchPage";
import { addComment } from "@babel/types";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./components/Resuables/Theme";
import { Router, Link } from "@reach/router";
import NavBar from "./components/Resuables/NavBar/NavBar";
import Login from "./components/Login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <Router>
        <Login path="/login"></Login>
        <SearchPage path="/" />
        <PlaceMain path="/place/:placeId" />
        <ImageGallery path="gallery" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
