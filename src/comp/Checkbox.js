import React from 'react';
import '../css/Checkbox.css';

function Checkbox(props) {
    console.log(props.visible)
    
    let visible = props.visible ;
    if(props.visible === undefined)
        visible = true;

    return (
        <button className={
            visible ? props.checked
                ? "checkbox checkbox-checked"
                : "checkbox checkbox-notchecked"
                : "checkbox checkbox-grayout"}
            onClick={visible ? () => props.onCheck(props.index) : undefined} />
    );
}

export default Checkbox;
