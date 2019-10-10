import React from "react";
import "../css/List.css";
import ListItem from "./ListItem";

function List(props) {
  return (
    <ul className="list">
      {props.items.map((v, i) => {
        return <ListItem key={i} {...props} {...v} />;
      })}
    </ul>
  );
}

export default List;
