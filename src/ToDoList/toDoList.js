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
        this.handleItemRemoved = this.handleItemRemoved.bind(this);
        this.handleFilterOptionChanged = this.handleFilterOptionChanged.bind(this);
      }

    handleItemAdded(itemName){
        let stateUpdates = {
            items: this.state.items.concat([{name: itemName}])
        }

        this.setState(stateUpdates)
    }

    handleItemRemoved(itemIndex){
        let stateUpdates = {
            items: this.state.items.filter(function(item, index)
                {
                    return index !== itemIndex
                }
            )
        }

        this.setState(stateUpdates)
    }

    handleFilterOptionChanged(filterValue) {
        let stateUpdates = {
            filterValue: filterValue
        }

        this.setState(stateUpdates)
    }
    
    render() {
        return (
            <div>
                <Header onItemAdded={this.handleItemAdded}/>
                <ItemList items={this.state.items} filterValue={this.state.filterValue} onItemRemoved={this.handleItemRemoved}/>
                <Footer items={this.state.items} filterValue={this.state.filterValue} onFilterOptionChanged={this.handleFilterOptionChanged}/>
            </div>
      );
    }
}

export default ToDoList;
