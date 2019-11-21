import React from "react";
import * as S from "../../styles";
import * as TS from "./topBarStyles";
import MenuBar from "./menuBar";
import SearchBar from "./searchBar";
import UserProfile from "./userProfile";

function TopBar(props) {
  return (
    <TS.TopBarContainer>
    <S.RowFlex>
      <MenuBar></MenuBar>       
      <SearchBar></SearchBar>
      <UserProfile></UserProfile>
    </S.RowFlex>
  </TS.TopBarContainer>
  );
}

export default TopBar;
