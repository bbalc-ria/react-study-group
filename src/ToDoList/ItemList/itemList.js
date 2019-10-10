import React from 'react';
import Item from './Item/item';
import './itemList.css'

class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.handleItemRemoved = this.handleItemRemoved.bind(this);
        this.handleItemCompleted = this.handleItemCompleted.bind(this);
      }

    handleItemRemoved(index) {
      this.props.onItemRemoved(index);
    }

    handleItemCompleted(index) {
        this.props.onItemCompleted(index);
      }

    render() {
        const items = this.props.items;
        const filterValue = this.props.filterValue;
        
        let filteredItems = items.filter(function(item, index) {
            if (filterValue === "All" || 
                (filterValue === "Completed" && item.complete) ||
                (filterValue === "Active" && !item.complete)){
                    return true;
                }
            return false;
        });

        let listItems = filteredItems.map((item, index) =>
            <Item name={item.name} key={index} id={index} complete={item.complete} 
                            onItemRemoved={() => this.handleItemRemoved(index)}
                            onItemCompleted={() => this.handleItemCompleted(index)} />
        );

        return (
            <ul class="itemList">
                {listItems}
            </ul>
      );
    }
}

export default ItemList;
