import React from "react";
import { NavLink } from "react-router-dom";
import * as TS from "./topBarStyles";

function MenuItem(props) {
    let _link;

    const navigateToMenu = () => {
        _link.click();
    }
    
    return (      
        <TS.MenuItem width={props.width} onClick={navigateToMenu}>
            <NavLink to={props.to} activeStyle={{color:'#f8963d'}} exact ref={c => (_link = c)}>
                {props.menuName}
            </NavLink>
        </TS.MenuItem>  
    )
}
  
export default MenuItem;
  