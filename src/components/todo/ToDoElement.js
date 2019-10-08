import React from "react";
import styled from 'styled-components';

export default function ToDoElement(props) {
  let handleChange = e => {
    props.changeCompleted(props.todo.id, !props.todo.completed);
  };
  return (
    <Li>
      <Input
        {}
        type="checkbox"
        checked={props.todo.completed}
        onChange={handleChange}
      ></Input>{" "}
      {props.todo.text}
    </Li>
  );
}

const Input=styled.input`
width: 1.3em;
height: 1.3em;
background-color: white;
border-radius: 50%;
vertical-align: middle;
border: 1px solid #ddd;
-webkit-appearance: none;
outline: none;
cursor: pointer;
`
const Li=styled.li
` border-bottom: 1px solid rgba(0, 0, 0, 0.2);
margin-top: 3px;
padding-left: 10px;
${props=>props.completed && `opacity: 0.3;
text-decoration: line-through`}

`