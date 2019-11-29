import React from "react";
import { Link } from "react-router-dom";
import * as Res from "../../resources";

function MyBooks(props) {
  return <Link to="/mybooks">{Res.MyBooksCaption}</Link>;
}

export default MyBooks;
