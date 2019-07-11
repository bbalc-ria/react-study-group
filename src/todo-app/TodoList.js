import React from 'react';
import TodoItem from './TodoItem'; 
import AddTodoItemTemplate from './AddTodoItemTemplate';
import {getListFromLocalstorage} from '../../src/utils/Helpers';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items};

        this.getListOfTodoItems = this.getListOfTodoItems.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    getListOfTodoItems = (items) => {
        let todoItems = items.map((todoItem) => {
            const {id, title, isActive, dueDate} = todoItem;
            return <TodoItem key={id} id={id} title={title} isActive={isActive} dueDate={dueDate}/>;
        });

        todoItems.push(<AddTodoItemTemplate key={100000} onAdd={this.onAddItem}/>)

        return todoItems;
    }

    onAddItem = (item) => {
        let persistedList = getListFromLocalstorage('todoJsonList');

        // Get highest existing id to compute the next id
        let itemIds = persistedList.map(item => item.id);

        let maxId = itemIds.length !== 0
            ? Math.max(...itemIds)
            : 0;

        item.id = maxId + 1;

        persistedList.push(item);
        this.setState({items: persistedList});
        localStorage.setItem('todoJsonList', JSON.stringify(persistedList));
    }    

    render(){
        return <React.Fragment>
            <h3>{this.props.title}</h3>
            <ul className="list-group">{this.getListOfTodoItems(this.state.items)}</ul>
        </React.Fragment>
    }
}

export default TodoList;