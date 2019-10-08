import React from 'react';
import '../css/Footer.css';

function Footer(props) {

    return (
        <div className="row">
            <label className="list-count-input">Items: {props.count}</label>
            <button className={props.activeFilter == 0 ? "filter-btn filter-active" : "filter-btn"} onClick={props.onFiltAll}>All</button>
            <button className={props.activeFilter == 1 ? "filter-btn filter-active" : "filter-btn"} onClick={props.onFiltActive}>Act</button>
            <button className={props.activeFilter == 2 ? "filter-btn filter-active" : "filter-btn"} onClick={props.onFiltComp}>Completed</button>
        </div>
    );
}

export default Footer;
