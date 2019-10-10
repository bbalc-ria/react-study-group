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
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
        this.handleItemCompleted = this.handleItemCompleted.bind(this);
        this.handleCheckAll = this.handleCheckAll.bind(this);
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

    handleItemCompleted(itemIndex) {
        let stateUpdates = {
            items: this.state.items.map(function(item, index)
                {
                    if (index === itemIndex){
                        item.complete = !item.complete;
                    }

                    return item;
                }
            )
        }

        this.setState(stateUpdates)
    }

    handleClearCompleted(itemIndex) {
        let stateUpdates = {
            items: this.state.items.filter(function(item, index)
                {
                    return !item.complete;
                }
            )
        }

        this.setState(stateUpdates)
    }

    handleCheckAll(checkAll){
        let stateUpdates = {
            items: this.state.items.map(function(item, index)
                {
                    item.complete = checkAll;
                    return item;
                }
            )
        }

        this.setState(stateUpdates)
    }
    
    render() {
        return (
            <div>
                <Header onItemAdded={this.handleItemAdded}
                    onCheckAll={this.handleCheckAll} />
                <ItemList items={this.state.items} filterValue={this.state.filterValue} 
                    onItemRemoved={this.handleItemRemoved}
                    onItemCompleted={this.handleItemCompleted} />
                <Footer items={this.state.items} filterValue={this.state.filterValue} 
                    onFilterOptionChanged={this.handleFilterOptionChanged} 
                    onClearCompleted={this.handleClearCompleted} />
            </div>
      );
    }
}

export default ToDoList;
