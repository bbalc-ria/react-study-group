import React from 'react';
import Item from './Item/item';
import './itemList.css'

class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.handleItemRemoved = this.handleItemRemoved.bind(this);
      }

    handleItemRemoved(index) {
      alert(index);
      this.props.onItemRemoved(index);
    }

    render() {
        const items = this.props.items;
        const filterValue = this.props.filterValue;
        
        let filteredItems = items.filter(function(item, index) {
            if (filterValue === "All" || 
                (filterValue === "Completed" && item.complete) ||
                (filterValue === "Active" && !item.complete)){
                    return item;
                }
        });

        let listItems = filteredItems.map((item, index) =>
            <Item name={item.name} key={index} id={index} complete={item.complete} 
                            onItemRemoved={() => this.handleItemRemoved(index)} />
        );

        return (
            <ul class="itemList">
                {listItems}
            </ul>
      );
    }
}

export default ItemList;
