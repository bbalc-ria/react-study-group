import React from "react";
import * as S from "./Styles";

function ListItem({ onCheck, onDelete, onDoubleClick, index, checked, text }) {
  return (
    <S.Li>
      <S.ToDoItemCheckbox
        type="checkbox"
        checked={checked}
        onChange={v => onCheck(index, v.target.checked)}
        index={index}
      />
      <S.ToDoItemLabel onDoubleClick={e => onDoubleClick(index)}>
        {text}
      </S.ToDoItemLabel>
      <S.ToDoItemDeleteButton onClick={() => onDelete(index)} />
    </S.Li>
  );
}

export default ListItem;
