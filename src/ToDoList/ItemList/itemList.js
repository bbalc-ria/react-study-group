import React from 'react';
import Item from './Item/item';

class ItemList extends React.Component {
    render() {
        const items = this.props.items;
        
        let listItems = items.map((item, index) => {
            return (<Item name={item.name} key={index}/>)
        });

        return (
            <ul>
                {listItems}
            </ul>
      );
    }
}

export default ItemList;
