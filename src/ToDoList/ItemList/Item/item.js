import React from 'react';
import './../../round_checkbox.css';
import './item.css';

function Item(props) {
    function handleItemRemoved() {
        props.onItemRemoved();
    }

    function handleItemCompleted() {
        props.onItemCompleted();
    }

        return (
            <li class="listItem">
                    <div class="round">
                        <input type="checkbox" id={props.id} checked={props.complete?"checked":""}
                            onClick={handleItemCompleted} />
                        <label for={props.id}></label>
                    </div>
                    {props.name}
                    <button class="deleteButton" 
                        onClick={handleItemRemoved}>
                        X
                    </button>
            </li>
      );
}

export default Item;
