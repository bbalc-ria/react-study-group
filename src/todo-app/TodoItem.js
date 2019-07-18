import React from "react";
import {
  getListFromLocalStorage,
  setListOnLocalStorage
} from "../../src/utils/Helpers";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: props.isCompleted };
  }

  onItemStateChanged = event => {
    let isItemCompleted = event.target.checked;
    let itemId = event.target.value;

    this.setState({ isCompleted: isItemCompleted });

    let persistedList = getListFromLocalStorage("todoJsonList");
    let persistedItem = persistedList.find(
      item => item.id === JSON.parse(itemId)
    );

    persistedItem.isCompleted = isItemCompleted;
    setListOnLocalStorage("todoJsonList", persistedList);
  };

  render() {
    return (
      <li className="list-group-item" key={this.props.id}>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              value={this.props.id}
              checked={this.state.isCompleted}
              onChange={this.onItemStateChanged}
            />
            {this.props.title}
          </label>
        </div>
      </li>
    );
  }
}

export default TodoItem;
