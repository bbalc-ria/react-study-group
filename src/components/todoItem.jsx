import React from 'react';

export default class TodoItem extends React.Component{

    delete = () =>{
        this.props.delete(this.props.id);
    }
    
    render(){
        let completed = "completed";
        return (
        <li>
            <div>
            <input type="checkbox" checked={this.props.status === completed ? "checked" : null}></input> 
            {this.props.name}
                <button type="button" name="deleteItem" onClick={this.delete}> X</button>
            </div>
        </li>
        );
    }
}