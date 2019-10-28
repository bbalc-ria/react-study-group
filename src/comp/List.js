import React from "react";
import ListItem from "./ListItem";
import EditableListItem from "./EditableListItem";
import * as S from "./Styles";

function List(props) {
  return (
    <S.Ul>
      {props.items.map((v, i) => {
        if (v.editable) return <EditableListItem key={i} {...props} {...v} />;
        else return <ListItem key={i} {...props} {...v} />;
      })}
    </S.Ul>
  );
}

export default List;
