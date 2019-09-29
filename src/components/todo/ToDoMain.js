import React, { Component } from "react";
import Input from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoFooter from "./ToDoFooter";

const filterTypes = {
  ALL: 0,
  ACTIVE: 1,
  COMPLETED: 2
};

export class ToDo extends Component {
  state = {
    listTodos: [],
    lastId: 0,
    customListTodos: [],
    filterType: filterTypes.ALL
  };
  AddTodo = text => {
    this.setState(
      {
        listTodos: [
          ...this.state.listTodos,
          { id: this.state.lastId, text, completed: false }
        ],
        lastId: this.state.lastId + 1
      },
      this.refreshCustomList
    );
  };

  refreshCustomList = () => {
    switch (this.state.filterType) {
      case filterTypes.ALL:
        this.showAll();
        break;
      case filterTypes.ACTIVE:
        this.showActive();
        break;
      case filterTypes.COMPLETED:
        this.showCompleted();
        break;
      default:
        break;
    }
  };

  changeCompleted = (id, value) => {
    let listTodos = this.state.listTodos;
    let index = listTodos.findIndex(x => x.id === id);
    listTodos[index].completed = value;
    this.setState({ listTodos });
  };

  showAll = () => {
    this.setState({ customListTodos: this.state.listTodos });
  };
  showActive = () => {
    this.setState({
      customListTodos: this.state.listTodos.filter(x => x.completed === false)
    });
  };
  showCompleted = () => {
    this.setState({
      customListTodos: this.state.listTodos.filter(x => x.completed === true)
    });
  };
  clearCompleted = () => {
    this.setState(
      { listTodos: this.state.listTodos.filter(x => !x.completed) },
      this.refreshCustomList
    );
  };
  handleChangeAll = () => {
    let completed = this.state.listTodos.filter(x => x.completed === true)
      .length;

    let allCompleted = completed === this.state.listTodos.length;
    let newArray = [];
    if (allCompleted) {
      this.state.listTodos.forEach(element => {
        let newElement = { ...element, completed: false };
        newArray.push(newElement);
      });
    } else {
      this.state.listTodos.forEach(element => {
        let newElement = { ...element, completed: true };
        newArray.push(newElement);
      });
    }
    this.setState({ listTodos: newArray }, this.refreshCustomList);
  };

  render() {
    return (
      <>
        <div className="full-body">
          <h1 className="title">ToDo</h1>
          <div className="list-wrapper">
            <div className="select-all">
              <button onClick={this.handleChangeAll}>SetAll</button>
            </div>
            <Input addTodo={this.AddTodo}></Input>

            <ToDoFooter
              total={this.state.listTodos.length}
              completed={
                this.state.listTodos.filter(x => x.completed === true).length
              }
              showAll={this.showAll}
              showActive={this.showActive}
              showCompleted={this.showCompleted}
              clear={this.clearCompleted}
            ></ToDoFooter>
            <ToDoList
              listTodos={this.state.customListTodos}
              changeCompleted={this.changeCompleted}
            >
              THERE is the List
            </ToDoList>
          </div>
        </div>
      </>
    );
  }
}

export default ToDo;
