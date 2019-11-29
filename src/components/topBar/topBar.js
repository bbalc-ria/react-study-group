import React from "react";
import * as S from "../../styles";
import * as TS from "./topBarStyles";
import MenuBar from "./menuBar";
import SearchBar from "./searchBar";
import UserProfile from "./userProfile";
import MyBooks from "./myBooks";

function TopBar(props) {
  return (
    <TS.TopBarContainer>
    <S.RowFlex>
      <MenuBar></MenuBar>    
      <MyBooks></MyBooks>   
      <SearchBar></SearchBar>
      <UserProfile></UserProfile>
    </S.RowFlex>
  </TS.TopBarContainer>
  );
}

export default TopBar;
