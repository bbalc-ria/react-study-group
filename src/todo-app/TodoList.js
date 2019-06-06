import React from 'react';
import TodoItem from './TodoItem'; 

const TodoList = (props) => {
    let todoItems = props.items.map((todoItem) => {
        const {title, isActive, dueDate} = todoItem;
        return <li><TodoItem title={title} isActive={isActive} dueDate={dueDate}/></li>;
    });

    return <div><ul>{todoItems}</ul></div>;
}

export default TodoList;