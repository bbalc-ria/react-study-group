import React from 'react';
import '../css/Checkbox.css';

function Checkbox(props) {
    let visible = props.visible === undefined ? true : props.visible;
    let className = visible ? "checkbox" : "checkbox checkbox-grayout";
    let onClick = () => props.onCheck(props.index);

    return (
        <input type="checkbox" disabled={!visible} onChange={onClick} checked={props.checked} className={className} />
    );
}

export default Checkbox;
