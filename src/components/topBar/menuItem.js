import React from "react";
import { NavLink } from "react-router-dom";
import * as TS from "./topBarStyles";

function MenuItem(props) {
    
    return (      
        <TS.MenuItem width={props.width}>
            <NavLink to={props.to} activeStyle={{color:'#f8963d'}} exact >
                {props.menuName}
            </NavLink> 
        </TS.MenuItem>  
    )
}
  
export default MenuItem;
  