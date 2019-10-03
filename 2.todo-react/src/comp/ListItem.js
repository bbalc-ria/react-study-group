import React from 'react';
import '../css/ListItem.css';

function ListItem(props) {
    return (
        <div className="list-row">
            <button className={props.checked ? "box box-checked" : "box box-notchecked"} onClick={()=> props.onCheck(props.index)}></button>
            <input className="list-input" value={props.value} readOnly={true} />
            <button className="box box-delete" onClick={() => props.onDelete(props.index)}></button>
        </div>
    );
}

export default ListItem;
