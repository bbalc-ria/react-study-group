import React from 'react';
import TodoItem from './TodoItem'; 

const TodoList = (props) => {
    let todoItems = props.items.map((todoItem) => {
        const {id, title, isActive, dueDate} = todoItem;
        return <TodoItem key={id} title={title} isActive={isActive} dueDate={dueDate}/>;
    });

    return (
        <React.Fragment>
            <h3>{props.title}</h3>
            <ul className="list-group">{todoItems}</ul>
        </React.Fragment>
    );
}

export default TodoList;