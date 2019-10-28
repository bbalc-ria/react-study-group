import React from "react";
import * as S from "./Styles";

function EditableListItem({ onCheck, onDelete, onSave, index, checked, text }) {
  return (
    <S.Li>
      <S.ToDoItemCheckbox
        type="checkbox"
        checked={checked}
        onChange={v => onCheck(index, v.target.checked)}
        index={index}
      />
      <S.Input
        onKeyPress={e => {
          if (e.key === "Enter") onSave(index, e.target.value);
        }}
        defaultValue={text}
      />
      <S.ToDoItemDeleteButton onClick={() => onDelete(index)} />
    </S.Li>
  );
}

export default EditableListItem;
