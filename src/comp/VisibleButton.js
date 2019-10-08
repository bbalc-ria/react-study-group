import React from 'react';
import '../css/VisibleButton.css';

function VisibleButton(props) {
    return (
        <button className={props.visible ? "btn-visible" : "btn-hidden"} onClick={props.onClick}>Clear Completed</button>
    );
}

export default VisibleButton;
