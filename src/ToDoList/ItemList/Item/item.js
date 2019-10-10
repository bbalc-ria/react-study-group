import React from 'react';
import './../../round_checkbox.css';
import './item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemRemoved = this.handleItemRemoved.bind(this);
        this.handleItemCompleted = this.handleItemCompleted.bind(this);
      }

    handleItemRemoved() {
        this.props.onItemRemoved();
    }

    handleItemCompleted() {
        this.props.onItemCompleted();
    }

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
                        <input type="checkbox" id={id} checked={checkedValue}
                            onClick={this.handleItemCompleted} />
                        <label for={id}></label>
                    </div>
                    {name}
                    <button class="deleteButton" 
                        onClick={this.handleItemRemoved}>
                        X
                    </button>
            </li>
      );
    }
}

export default Item;
