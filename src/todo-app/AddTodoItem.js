import React from "react";
import { resources } from "../utils/Resources";

class AddTodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleOnAdd = event => {
    let item = {
      id: 0,
      title: this.state.title,
      isCompleted: false,
      dueDate: ""
    };
    this.props.onAdd(item);
    this.setState({ title: "" });
    event.preventDefault();
  };

  handleKeyPress = event => {
    if (event.charCode === 13 && this.state.title !== "") {
      this.handleOnAdd(event);
    }
  };

  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <input
            type="text"
            className="form-control col-md-9"
            placeholder={resources.toDoItemPlaceholder}
            value={this.state.title}
            onChange={this.handleTitleChange}
            onKeyPress={this.handleKeyPress}
          />

          <input
            type="button"
            className="btn btn-primary btn-sm col-md-2 offset-md-1"
            value={resources.addCaption}
            disabled={this.state.title === ""}
            onClick={this.handleOnAdd}
          />
        </div>
      </li>
    );
  }
}

export default AddTodoItem;
