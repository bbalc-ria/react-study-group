import React, { useState } from "react";
import * as S from './styles';
export default function ToDoElement(props) {
  const [hovered, setHovered] = useState(false);
  let handleChange = () => {
    props.changeCompleted(props.todo.id, !props.todo.completed);
  };
  let handleDelete = () => {
    hovered && props.delete(props.todo.id);

  }
  return (

    <S.Li
      onMouseEnter={() => { setHovered(true); console.log("enter") }}
      onMouseLeave={() => { setHovered(false); console.log("leave") }}
      completed={props.todo.completed}>
      <S.CheckBox
        type="checkbox"
        checked={props.todo.completed}
        onClick={handleChange}
      />
      {props.todo.text}

      <S.DeleteImage hovered={hovered} onClick={handleDelete} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/1024px-White_X_in_red_background.svg.png"></S.DeleteImage>
    </S.Li>

  );

}


