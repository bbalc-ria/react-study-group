import React from 'react';
import './../round_checkbox.css';
import './header.css'

function Header(props) {
    function handleKeyDown(e) {
        if (e.key === "Enter"){
            props.onItemAdded(e.target.value);
            e.target.value = "";
        }
    }

    function handleCheckAll(e) {
        props.onCheckAll(e.target.checked);
    }

        return (
            <div class="header">
                <div class="round">
                    <input type="checkbox" id="checkbox"
                        onChange={handleCheckAll} />
                    <label for="checkbox"></label>
                </div>
                <input class="borderlessInput" id="addNewItem" placeholder="What needs to be done?"
                    onKeyDown={handleKeyDown} />
            </div>
            
      );
}

export default Header;
