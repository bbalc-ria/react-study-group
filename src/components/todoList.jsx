import React from 'react';
import TodoItem from './todoItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: this.props.items };
    }    
    render() {
        return (
            <ul>
            {
                this.state.items.map((item) => 
                     <TodoItem key={item.id} name={item.name} status={item.status} />)
            }
            </ul>
      );
    }
}
