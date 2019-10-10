import React from 'react';
import Item from './Item/item';
import './itemList.css'

function ItemList(props)  {
    function handleItemRemoved(index) {
      props.onItemRemoved(index);
    }

    function handleItemCompleted(index) {
        props.onItemCompleted(index);
    }

    function getListItems() {
        const items = props.items;
            const filterValue = props.filterValue;
            
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
                                onItemRemoved={() => handleItemRemoved(index)}
                                onItemCompleted={() => handleItemCompleted(index)} />
            );

            return listItems;
    }

    return (
        <ul class="itemList">
            {getListItems()}
        </ul>
    );
}

export default ItemList;
