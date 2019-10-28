import React from 'react';
import './../../roundCheckbox';
import './item.css';
import RoundCheckbox from './../../roundCheckbox';

function Item(props) {
    function handleItemRemoved() {
        props.onItemRemoved();
    }

    function handleItemCompleted() {
        props.onItemCompleted();
    }

        return (
            <li class="listItem">
                    <RoundCheckbox>
                        <input type="checkbox" id={props.id} checked={props.complete?"checked":""}
                            onClick={handleItemCompleted} />
                        <label for={props.id}></label>
                    </RoundCheckbox>
                    {props.name}
                    <button class="deleteButton" 
                        onClick={handleItemRemoved}>
                        X
                    </button>
            </li>
      );
}

export default Item;
