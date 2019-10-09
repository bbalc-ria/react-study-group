import React from 'react';
import TodoAdd from './todoAdd';
import TodoList from './todoList';
import TodoFooter from './todoFooter';

export default class TodoMain extends React.Component{
    render(){
        const items = this.props.items;
        return(
        <>
            <TodoAdd />
            <TodoList items={items} />
            <TodoFooter />
        </>
        );
    }
}
