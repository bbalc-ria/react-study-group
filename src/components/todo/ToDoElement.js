import React from "react";

export default function ToDoElement(props) {
  let handleChange = e => {
    props.changeCompleted(props.todo.id, !props.todo.completed);
  };
  return (
    <li
      className={
        props.todo.completed ? "todo-element completed" : "todo-element"
      }
    >
      <input
        type="checkbox"
        className="checkbox-round"
        checked={props.todo.completed}
        onChange={handleChange}
      ></input>{" "}
      {props.todo.text}
    </li>
  );
}
