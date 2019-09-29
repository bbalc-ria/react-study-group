import React, { Component } from "react";

export default class ToDoFooter extends Component {
  componentDidMount = () => {
    this.props.showAll();
  };
  render() {
    return (
      <div className="footer">
        <button name="all" className="button" onClick={this.props.showAll}>
          All
        </button>
        <button
          name="active"
          className="button"
          onClick={this.props.showActive}
        >
          Active
        </button>
        <button
          name="completed"
          className="button"
          onClick={this.props.showCompleted}
        >
          Completed
        </button>
        {this.props.completed}/ {this.props.total}
        {this.props.completed !== 0 && (
          <button name="clear" className="button" onClick={this.props.clear}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
