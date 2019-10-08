import React from "react";
import * as S from './styles';
export default function ToDoElement(props) {
  let handleChange = e => {
    debugger;
    props.changeCompleted(props.todo.id, !props.todo.completed);
  };
  return (
    <S.Li>
      <S.Element
        type="checkbox"
        checked={props.todo.completed}
        onClick={handleChange}
      >
        {/* {props.todo.text} */}
      </S.Element>
    </S.Li>
  );

}
const theme = {
  main: "mediumseagreen"
};

