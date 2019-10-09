import React from "react";
import ToDoElement from "./ToDoElement";
import * as S from './styles';
export function ToDoList(props) {
  return (
    <div className="list">
      <S.ToDoListElement>
        {props.listTodos.map(x => (
          <ToDoElement
            key={x.id}
            todo={x}
            completed={x.completed}
            changeCompleted={props.changeCompleted}
            delete={props.delete}
          ></ToDoElement>
        ))}
      </S.ToDoListElement>
    </div>
  );
}



export default ToDoList;
