import React from 'react';

const displayStatus = (isActive) => <input type="radio" checked={isActive}/>

const TodoItem = ({title, isActive, dueDate}) => (
    <li className="list-group-item">
        <div className="radio">{displayStatus(isActive)} {title}, {dueDate}</div>
    </li>
)

export default TodoItem;