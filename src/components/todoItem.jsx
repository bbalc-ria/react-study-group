import React from 'react';

export default class TodoItem extends React.Component{
    
    render(){
        let completed = "completed";
        return (
        <li>
            <div>
            <input type="checkbox" checked={this.props.status === completed ? "checked" : null}></input>TODO Name: {this.props.name}
                <button type="button" name="deleteItem"> X</button>
            </div>
        </li>
        );
    }
}