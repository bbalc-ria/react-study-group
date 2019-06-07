import React from 'react';
import TodoData from '../data/todo.json';
import TodoItem from './TodoItem.js';

const TodoList = () =>{
        return (
            <ul>
            {
               TodoData.map((item, index) => {
                   return (<TodoItem id={item.id} name={item.name}/>);
                })
            }
            </ul>
        )
    }

export default TodoList;