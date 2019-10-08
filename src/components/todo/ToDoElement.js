import React from "react";
import * as S from './styles';
export default function ToDoElement(props) {
  let handleChange = e => {
    props.changeCompleted(props.todo.id, !props.todo.completed);
  };
  return (
    <S.Li>
      <S.Element
        type="checkbox"
        checked={props.todo.completed}
        onChange={handleChange}
      ></S.Element>{" "}
      {props.todo.text}
    </S.Li>
  );
}

