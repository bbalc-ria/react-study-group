import React from 'react';
import '../css/List.css';
import ListItem from './ListItem'

function List(props) {
    const listItems = props.items.map((v, i) => {
        let args = {
            index: v.index,
            text: v.text,
            checked: v.checked,
            onCheck: props.onCheck,
            onDelete: props.onDelete
        }

        return (<ListItem key={i} {...args} />);
    });

    return (
        <ul className="list">
            {listItems}
        </ul>
    );
}

export default List;
