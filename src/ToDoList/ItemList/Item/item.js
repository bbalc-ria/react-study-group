import React from 'react';
import './../../round_checkbox.css';
import './item.css';

class Item extends React.Component {
    render() {
        const name = this.props.name;
        const id = this.props.id + "_checkbox";

        return (
            <li class="listItem">
                    <div class="round">
                        <input type="checkbox" id={id} />
                        <label for={id}></label>
                    </div>
                    {name}
                    <button class="deleteButton">X</button>
            </li>
      );
    }
}

export default Item;
