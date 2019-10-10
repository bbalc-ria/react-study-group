import React from 'react';
import TodoAdd from './todoAdd';
import TodoList from './todoList';
import TodoFooter from './todoFooter';

const TodoMain = (props) => {
        const items = props.items;
        return  <>
            <TodoAdd />
            <TodoList items={items} />
            <TodoFooter />
        </>;
    }

export default TodoMain;
