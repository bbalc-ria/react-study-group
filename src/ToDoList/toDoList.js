import React, { useState } from 'react';
import Header from './Header/header';
import ItemList from './ItemList/itemList';
import Footer from './Footer/footer';

function ToDoList(props) {
    const [filterValue, setFilterValue] = useState('All');
    const [items, setItems] = useState([{name:"name 1", complete:true},{name:"name 2"}]);

    function handleItemAdded(itemName){
        let updatedItems = items.concat([{name: itemName}]);
        setItems(updatedItems);
    }

    function handleItemRemoved(itemIndex) {
        let remainingItems = items.filter(function(item, index)
                {
                    return index !== itemIndex
                });
        setItems(remainingItems);
    }

    function handleFilterOptionChanged(filterValue) {
        setFilterValue(filterValue);
    }

    function handleItemCompleted(itemIndex) {
        let updatedItems = items.map(function(item, index)
        {
            if (index === itemIndex){
                item.complete = !item.complete;
            }

            return item;
        });

        setItems(updatedItems);
    }

    function handleClearCompleted(itemIndex) {
        let remainingItems = items.filter(function(item, index)
        {
            return !item.complete;
        });
        
        setItems(remainingItems);
    }

    function handleCheckAll(checkAll) {
        let updatedItems = items.map(function(item, index)
        {
            item.complete = checkAll;
            return item;
        });
        setItems(updatedItems);
    }
    
        return (
            <div>
                <Header onItemAdded={handleItemAdded}
                    onCheckAll={handleCheckAll} />
                <ItemList items={items} filterValue={filterValue} 
                    onItemRemoved={handleItemRemoved}
                    onItemCompleted={handleItemCompleted} />
                <Footer items={items} filterValue={filterValue} 
                    onFilterOptionChanged={handleFilterOptionChanged} 
                    onClearCompleted={handleClearCompleted} />
            </div>
        );
}

export default ToDoList;
