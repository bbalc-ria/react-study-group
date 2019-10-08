import React, { useEffect } from "react";
import * as S from 'styles';

export default function ToDoFooter(props) {
  useEffect(() => {
    props.show();
  });
  return (
    <div>
      <S.Button name="all" onClick={props.showAll}>
        All
        </S.Button>
      <S.Button
        name="active"
        className="S.Button"
        onClick={props.showActive}
      >
        Active
        </S.Button>
      <S.Button
        name="completed"
        className="S.Button"
        onClick={props.showCompleted}
      >
        Completed
        </S.Button>
      {props.completed}/ {props.total}
      {props.completed !== 0 && (
        <S.Button name="clear" onClick={props.clear}>
          Clear
          </S.Button>
      )}
    </div>
  );
}
