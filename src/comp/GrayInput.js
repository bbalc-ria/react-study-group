import React from 'react';
import '../css/GrayInput.css';

function GrayInput(props) {
    return (
        <label  className={props.checked ? "row-label grayout": "row-label" } >{props.text}</label>
    );
}

export default GrayInput;
