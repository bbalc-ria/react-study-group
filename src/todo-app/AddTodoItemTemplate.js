import React from 'react';

class AddTodoItemTemplate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title: ''};

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this)
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    handleOnAdd = (event) => {
        let item = {id: 0, title: this.state.title, isActive: false, dueDate: ''};
        this.props.onAdd(item);
        this.setState({title: ''});
        event.preventDefault();
    }

    render(){
        return <li className="list-group-item">
            <div className="row">
                <input  
                    type="text" 
                    className="form-control col-md-9" 
                    placeholder="To do item"
                    value={this.state.title}
                    onChange={this.handleTitleChange}/>

                <input 
                    type="button" 
                    className="btn btn-primary btn-sm col-md-2 offset-md-1"
                    value="Add"
                    disabled={!this.state.title}
                    onClick={this.handleOnAdd}/>
                    </div>
        </li>        
    }
}

export default AddTodoItemTemplate;