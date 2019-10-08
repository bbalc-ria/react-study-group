import React from "react";
import * as S from 'styles';
export default function ToDoElement(props) {
  let handleChange = e => {
    props.changeCompleted(props.todo.id, !props.todo.completed);
  };
  return (
    <S.Li>
      <S.Input
        type="checkbox"
        checked={props.todo.completed}
        onChange={handleChange}
      ></S.Input>{" "}
      {props.todo.text}
    </S.Li>
  );
}

