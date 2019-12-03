import React from "react";
import * as TS from "./topBarStyles";
import MenuBar from "./menuBar";
import SearchBar from "./searchBar";
import UserProfile from "./userProfile";
import Logo from './bookclub_logo.png';

function TopBar(props) {
  return (
  <TS.TopBarContainer>
    <TS.Logo src={Logo}></TS.Logo>
    <MenuBar></MenuBar>    
    <SearchBar></SearchBar>
    <UserProfile></UserProfile>
  </TS.TopBarContainer>
  );
}

export default TopBar;
