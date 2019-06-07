import React from 'react';

const DisplayStatus = (isActive) => <input type="radio" checked={isActive}/>

const TodoItem = ({title, isActive, dueDate}) => (
    <li className="list-group-item">
        <div className="radio">{DisplayStatus(isActive)} {title}, {dueDate}</div>
    </li>
)

export default TodoItem;