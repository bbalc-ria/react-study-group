import React from "react";
import { Link } from "react-router-dom";
import * as TS from "./topBarStyles";
import MenuBar from "./menuBar";
import SearchBar from "./searchBar";
import UserProfile from "./userProfile";
import Logo from './bookclub_logo.png';

function TopBar(props) {
  return (
  <TS.TopBarContainer>
    <Link to="/">
      <TS.Logo src={Logo}></TS.Logo>
    </Link>
    <MenuBar/>    
    <SearchBar/>
    <UserProfile/>
  </TS.TopBarContainer>
  );
}

export default TopBar;
