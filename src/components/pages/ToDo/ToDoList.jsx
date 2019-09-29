import React from 'react'
import { ListGroup } from 'reactstrap';
import ToDoItem from './ToDoItem';

const ToDoList = ({ items, onSelected }) => {

    var itemList = items.map((item) => {
        return <ToDoItem item={item} key={item.id} onSelected={onSelected} />
    });

    return (
        <ListGroup>
            {itemList}
        </ListGroup>);
};

export default ToDoList;