import React from 'react';
import '../css/Button.css';

function Button(props) {
    let className = props.active ? "btn-style btn-style-active" : "btn-style";
    className += " ";
    className += props.className;

    return (
        <button className={className} onClick={props.onClick}>{props.text}</button>
    );
}

export default Button;
