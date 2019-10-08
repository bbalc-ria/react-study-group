import React from 'react';
import Item from './Item/item';
import './itemList.css'

class ItemList extends React.Component {
    render() {
        const items = this.props.items;
        const filterValue = this.props.filterValue;
        
        let listItems = items.reduce(function(result, item, index) {
            if (filterValue === "All" || 
                (filterValue === "Completed" && item.complete) ||
                (filterValue === "Active" && !item.complete)){
                    result.push(<Item name={item.name} key={index} id={index} complete={item.complete}/>);
                }
            return result;
        }, []);

        return (
            <ul class="itemList">
                {listItems}
            </ul>
      );
    }
}

export default ItemList;
