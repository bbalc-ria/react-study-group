import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import * as S from "../styles";


function UpdatesFeedItem(props) {
  return (
      <li>
        <Link to={"/book/detail/" + props.book.bookId}>{props.book.title}</Link>          
      </li> 
  );
  }

export default withRouter(UpdatesFeedItem);
