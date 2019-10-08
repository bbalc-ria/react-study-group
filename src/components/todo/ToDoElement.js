import React from "react";
import * as S from './styles';
export default function ToDoElement(props) {
  let handleChange = e => {
    props.changeCompleted(props.todo.id, !props.todo.completed);
  };
  return (
    <S.Li>
      <ThemeProvider theme={theme}>
        <S.Element
          type="checkbox"
          checked={props.todo.completed}
          onChange={handleChange}
        >
          {props.todo.text}
        </S.Element>
      </ThemeProvider>
    </S.Li>
  );
}

