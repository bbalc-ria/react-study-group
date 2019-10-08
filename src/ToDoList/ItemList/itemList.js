import React from 'react';
import Item from './Item/item';
import './itemList.css'

class ItemList extends React.Component {
    render() {
        const items = this.props.items;
        
        let listItems = items.map((item, index) => {
            return (<Item name={item.name} key={index} id={index}/>)
        });

        return (
            <ul class="itemList">
                {listItems}
            </ul>
      );
    }
}

export default ItemList;
