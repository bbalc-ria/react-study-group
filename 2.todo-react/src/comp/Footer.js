import React from 'react';
import '../css/Footer.css';

function Footer(props) {
    return (
        <div className="row">
            <input className="list-input" value={props.count} readOnly={true} />
            <button className="box" value="All" onClick={props.onFiltAll}>All</button>
            <button className="box" value="Active" onClick={props.onFiltActive}>Act</button>
            <button className="box" value="Completed" onClick={props.onFiltComp}>Comp</button>
        </div>
    );
}

export default Footer;
