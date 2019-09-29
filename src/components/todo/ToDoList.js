import React, { Component } from "react";
import ToDoElement from "./ToDoElement";

export class ToDoList extends Component {
  render() {
    return (
      <div className="list">
        <ul className="todo-list">
          {this.props.listTodos.map(x => (
            <ToDoElement
              key={x.id}
              todo={x}
              changeCompleted={this.props.changeCompleted}
            ></ToDoElement>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
