import React from 'react';
import Header from './Header/header';
import ItemList from './ItemList/itemList';
import Footer from './Footer/footer';

class ToDoList extends React.Component {
    render() {
        const items = this.props.items;
        const filterValue = this.props.filterValue;
        const itemCount = this.props.itemCount;
        
        return (
            <div>
                <Header/>
                <ItemList items={items}/>
                <Footer itemCount={itemCount} filterValue={filterValue}/>
            </div>
      );
    }
}

export default ToDoList;
