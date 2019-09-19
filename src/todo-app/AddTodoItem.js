import React, { useState } from "react";
import { resources } from "../utils/Resources";

const AddTodoItem = props => {
  const [title, setTitle] = useState("");

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleOnAdd = event => {
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
    <li className="list-group-item">
      <div className="row">
        <input
          type="text"
          className="form-control col-md-9"
          placeholder={resources.toDoItemPlaceholder}
          value={title}
          onChange={handleTitleChange}
          onKeyPress={handleKeyPress}
        />

        <input
          type="button"
          className="btn btn-primary btn-sm col-md-2 offset-md-1"
          value={resources.addCaption}
          disabled={title === ""}
          onClick={handleOnAdd}
        />
      </div>
    </li>
  );
};

export default AddTodoItem;
