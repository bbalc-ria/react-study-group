import React from 'react';
import '../css/ListItem.css';
import Checkbox from './Checkbox'
import GrayInput from './GrayInput'

function ListItem(props) {
    return (
        <li className="list-row">
            <Checkbox checked={props.checked} onCheck={props.onCheck} index={props.index} />
            <GrayInput checked={props.checked} text={props.text} />            
            <button className="box box-delete" onClick={() => props.onDelete(props.index)} />
        </li>
    );
}

export default ListItem;
