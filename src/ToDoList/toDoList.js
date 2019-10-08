import React from 'react';
import Header from './Header/header';
import ItemList from './ItemList/itemList';
import Footer from './Footer/footer';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filterValue: 'All',
          items: [{name:"name 1", complete:true},{name:"name 2"}]
        };

        this.handleItemAdded = this.handleItemAdded.bind(this);
      }

    handleItemAdded(itemName){
        let stateUpdates = {
            items: this.state.items.concat([{name: itemName}])
        }

        this.setState(stateUpdates)
    }
    
    render() {
        return (
            <div>
                <Header onItemAdded={this.handleItemAdded}/>
                <ItemList items={this.state.items} filterValue={this.state.filterValue}/>
                <Footer items={this.state.items} filterValue={this.state.filterValue}/>
            </div>
      );
    }
}

export default ToDoList;
