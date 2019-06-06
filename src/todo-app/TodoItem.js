import React from 'react';

const Displaystatus = (isActive) => isActive ? 'Active' : 'Completed';

const TodoItem = ({title, isActive, dueDate}) => (<div>{title}, {Displaystatus(isActive)}, {dueDate}</div>)

export default TodoItem;