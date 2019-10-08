import React from 'react';
import '../css/Filter.css';
import Button from './Button';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            setFilter: props.setFilter,
            getActiveFilter: props.getActiveFilter,
        };
    }

    showAll = () => {
        this.state.setFilter((items) => { return items.filter(v => v) }, 0);
    }

    showActive = () => {
        this.state.setFilter((items) => { return items.filter(v => !v.checked) }, 1);
    }

    showCompleted = () => {
        this.state.setFilter((items) => { return items.filter(v => v.checked) }, 2);
    }

    render() {
        let activeFilter = this.state.getActiveFilter();
        return (
            <div className="list-filter-container" >
                <Button active={activeFilter === 0} onClick={this.showAll} text="All" />
                <Button active={activeFilter === 1} onClick={this.showActive} text="Active" />
                <Button active={activeFilter === 2} onClick={this.showCompleted} text="Completed" />
            </div>
        )
    };
}

export default Filter;
