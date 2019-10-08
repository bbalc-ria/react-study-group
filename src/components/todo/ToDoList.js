import React from "react";
import ToDoElement from "./ToDoElement";

export function ToDoList(props) {
    return (
      <div className="list">
        <ul className="todo-list">
          {props.listTodos.map(x => (
            <ToDoElement
              key={x.id}
              todo={x}
              changeCompleted={props.changeCompleted}
            ></ToDoElement>
          ))}
        </ul>
      </div>
    );
  }

export default ToDoList;
