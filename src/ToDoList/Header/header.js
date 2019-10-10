import React from 'react';
import './../round_checkbox.css';
import './header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleCheckAll = this.handleCheckAll.bind(this);
      }

    handleKeyDown(e) {
        if (e.key === "Enter"){
            this.props.onItemAdded(e.target.value);
            e.target.value = "";
        }
    }

    handleCheckAll(e) {
        this.props.onCheckAll(e.target.checked);
    }

    render() {
        return (
            <div class="header">
                <div class="round">
                    <input type="checkbox" id="checkbox"
                        onChange={this.handleCheckAll} />
                    <label for="checkbox"></label>
                </div>
                <input class="borderlessInput" id="addNewItem" placeholder="What needs to be done?"
                    onKeyDown={this.handleKeyDown} />
            </div>
            
      );
    }
}

export default Header;
