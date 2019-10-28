import React, { useEffect } from "react";
import * as S from './styles';
import { filterTypes } from "./ToDoMain";

export default function ToDoFooter(props) {
  useEffect(() => {
    props.show();
  });
  return (
    <>
      <S.LeftCounter className="test">  {props.total - props.completed} left</S.LeftCounter>
      <S.Footer>


        <S.Button name="all" onClick={props.showAll}
          selected={props.filterType === filterTypes.ALL}
        >
          All
        </S.Button>
        <S.Button
          name="active"
          className="S.Button"
          onClick={props.showActive}
          selected={props.filterType === filterTypes.ACTIVE}
        >
          Active
        </S.Button>
        <S.Button
          name="completed"
          className="S.Button"
          onClick={props.showCompleted}
          selected={props.filterType === filterTypes.COMPLETED}
        >
          Completed
        </S.Button>
        {props.completed !== 0 && (
          <S.Button name="clear" onClick={props.clear}>
            Clear
          </S.Button>
        )}
      </S.Footer>
    </>
  );
}
