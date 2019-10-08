import React from 'react';
import '../css/Checkbox.css';

function Checkbox(props) {
    console.log(props.visible)

    let visible = props.visible === undefined ? true : props.visible;
    let className = visible ? "checkbox" : "checkbox checkbox-grayout";
    let onClick = visible ? () => props.onCheck(props.index) : undefined;

    return (
        <input type="checkbox" checked={props.checked} className={className} onClick={onClick} />
    );
}

export default Checkbox;
