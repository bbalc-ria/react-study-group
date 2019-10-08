import React from 'react';
import './../round_checkbox.css';
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <div class="round">
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox"></label>
                </div>
                <input class="borderlessInput" id="addNewItem" placeholder="What needs to be done?" />
            </div>
            
      );
    }
}

export default Header;
