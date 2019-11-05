import React, { useState } from "react";
import * as S from "./styles";
import { resources } from "../utils/Resources";

const AddTodoItem = props => {
  const [title, setTitle] = useState("");

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleOnAdd = event => {
    if (title === "") return;

    let item = {
      id: 0,
      title: title,
      isCompleted: false,
      dueDate: ""
    };

    props.onAdd(item);
    setTitle("");
    event.preventDefault();
  };

  const handleKeyPress = event => {
    if (event.charCode === 13 && title !== "") {
      handleOnAdd(event);
    }
  };

  return (
    <S.ListGroupItem>
      <S.Row>
        <S.FormControl
          type="text"
          placeholder={resources.toDoItemPlaceholder}
          value={title}
          onChange={handleTitleChange}
          onKeyPress={handleKeyPress}
        />

        <S.Button disabled={title === ""} onClick={handleOnAdd}>
          {resources.addCaption}
        </S.Button>
      </S.Row>
    </S.ListGroupItem>
  );
};

export default AddTodoItem;
