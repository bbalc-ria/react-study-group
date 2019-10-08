import React from 'react';
import './../../round_checkbox.css';
import './item.css';

class Item extends React.Component {
    render() {
        const name = this.props.name;
        const complete = this.props.complete;
        const id = this.props.id + "_checkbox";

        let checkedValue = "";
        if (complete){
            checkedValue = "checked";
        }

        return (
            <li class="listItem">
                    <div class="round">
                        <input type="checkbox" id={id} checked={checkedValue} />
                        <label for={id}></label>
                    </div>
                    {name}
                    <button class="deleteButton">X</button>
            </li>
      );
    }
}

export default Item;
