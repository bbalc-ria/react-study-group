import React from 'react';
import TodoData from '../data/todo.json';
import Item from './TodoItem.js';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: TodoData };
  }
  handleChange = event => {
    let clickedItem = this.state.todoList.find(todo => {
      return todo.id === parseInt(event.target.id, 10);
    });
    clickedItem.completed = !clickedItem.completed;
    const index = this.state.todoList.indexOf(clickedItem);
    this.setState({
      todoList: [
        ...this.state.todoList.slice(0, index),
        clickedItem,
        ...this.state.todoList.slice(index + 1),
      ],
    });
  };

  render() {
    return (
      <ul>
        {this.state.todoList.map(todoItem => (
          <Item
            handleChange={this.handleChange}
            key={todoItem.id}
            id={todoItem.id}
            name={todoItem.name}
            completed={todoItem.completed}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
