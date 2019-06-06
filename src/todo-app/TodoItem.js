import React from 'react';

const displayStatus = (isActive) => isActive ? <input type="radio" checked readOnly/> : <input type="radio"/>

const TodoItem = ({title, isActive, dueDate}) => (
    <li className="list-group-item">
        <div className="radio">{displayStatus(isActive)} {title}, {dueDate}</div>
    </li>
)

export default TodoItem;