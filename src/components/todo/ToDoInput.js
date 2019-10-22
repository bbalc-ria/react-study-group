import React, { useState } from "react";
import * as S from './styles';
export default function TodoInput(props) {
  const [text, setText] = useState("");
  let handleChange = e => {
    setText(e.target.value);
  };

  let handlePress = e => {
    if (e.key === "Enter" && text.length > 0) {
      props.addTodo(text);
      setText("");
    }
  };

  return (
    <S.InputWrapper>

      <S.SelectAllButton checked={props.allChecked} onClick={props.handleChangeAll} />
      <S.Input
        placeholder="Input text of the todo"
        type="text"
        value={text}
        onChange={handleChange}
        onKeyPress={handlePress}
        isActive
      />

    </S.InputWrapper>


  );
}

