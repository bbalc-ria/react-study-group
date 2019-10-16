import React from "react";
import ToDoElement from "./ToDoElement";
import * as S from './styles';
export function ToDoList(props) {
  return (
    <S.ToDoListElement>
      {props.listTodos.map(x => (
        <ToDoElement
          key={x.id}
          todo={x}
          completed={x.completed}
          changeCompleted={props.changeCompleted}
          delete={props.delete}
        />
      ))}
    </S.ToDoListElement>
  );
}



export default ToDoList;
