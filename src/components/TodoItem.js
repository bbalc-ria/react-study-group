import React from 'react';

const TodoItem = props => {
        return ( 
                <li id={props.id}>
                    <input type="checkbox" id={props.id}/>{props.name}
                </li>
        );
}

export default TodoItem;