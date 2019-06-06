import React from 'react';

const DisplayStatus = (isActive) => isActive ? 'Active' : 'Completed';

const TodoItem = ({title, isActive, dueDate}) => (<div>{title}, {DisplayStatus(isActive)}, {dueDate}</div>)

export default TodoItem;