import React from 'react';
import {getListFromLocalstorage} from '../../src/utils/Helpers';

class TodoItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isActive: props.isActive};

        this.onItemStateChanged = this.onItemStateChanged.bind(this);
    }

    onItemStateChanged = (event) => {
        let isItemActive = event.target.checked;
        let itemId = event.target.value;

        this.setState({isActive: isItemActive});

        let persistedList = getListFromLocalstorage('todoJsonList');
        let persistedItem = persistedList.find(item => item.id == itemId);
        persistedItem.isActive = isItemActive;

        localStorage.setItem('todoJsonList', JSON.stringify(persistedList));
    }

    render(){
        return (
        <li className="list-group-item"
            key={this.props.id}>
            <div className="form-check">
                <label className="form-check-label"><input 
                    type="checkbox" 
                    className="form-check-input"
                    value={this.props.id}
                    checked={this.state.isActive}
                    onChange={this.onItemStateChanged}/>
                    {this.props.title}
                </label>
            </div>
        </li>
        )
    }
}

export default TodoItem;