import React from "react";
import * as TS from "./topBarStyles";
import * as Res from "../../resources";
import MenuItem from "./menuItem";

function MenuBar(props) {
  return (
    <TS.MenuBarContainer>
      <MenuItem to="/" menuName={Res.HomeCaption} activeClassName="selectedMenuItem"/>
      <MenuItem to="/myBooks/All"  menuName={Res.MyBooksCaption} activeClassName="selectedMenuItem" width={'180px'}/>
    </TS.MenuBarContainer>
    );
  }
  
export default MenuBar;
  