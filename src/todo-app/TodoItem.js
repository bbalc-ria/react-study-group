import React, { useState } from "react";
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
    <li className="list-group-item" key={props.id}>
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            value={props.id}
            checked={isCompleted}
            onChange={onItemStateChanged}
          />
          {props.title}
        </label>
      </div>
    </li>
  );
};

export default TodoItem;
