import React, { useState } from "react";
import * as S from "./styles";
import {
  getListFromLocalStorage,
  setListOnLocalStorage
} from "../../src/utils/Helpers";

const TodoItem = props => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const onItemStateChanged = event => {
    let isItemCompleted = event.target.checked;
    let itemId = event.target.value;

    setIsCompleted(isItemCompleted);

    let persistedList = getListFromLocalStorage("todoJsonList");
    let persistedItem = persistedList.find(
      item => item.id === JSON.parse(itemId)
    );

    persistedItem.isCompleted = isItemCompleted;
    setListOnLocalStorage("todoJsonList", persistedList);
  };

  return (
    <S.ListGroupItem key={props.id}>
      <S.CheckboxWrapper>
        <S.Label>
          <S.Input
            type="checkbox"
            className="form-check-input"
            value={props.id}
            checked={isCompleted}
            onChange={onItemStateChanged}
          />
          {props.title}
        </S.Label>
      </S.CheckboxWrapper>
    </S.ListGroupItem>
  );
};

export default TodoItem;
