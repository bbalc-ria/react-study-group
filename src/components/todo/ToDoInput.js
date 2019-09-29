import React, { Component } from "react";
import "./input.scss";
export class Input extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePress = e => {
    if (e.key === "Enter" && this.state.text.length > 0) {
      this.props.addTodo(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div className="input">
        <input
          name="text"
          placeholder="Input text of the todo"
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyPress={this.handlePress}
        ></input>
      </div>
    );
  }
}

export default Input;
