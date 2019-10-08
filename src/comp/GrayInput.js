import React from 'react';
import '../css/GrayInput.css';

function GrayInput(props) {
    return (
        <input readOnly={true} className={props.checked ? "row-label grayout": "row-label" } value={props.text}/>
    );
}

export default GrayInput;
