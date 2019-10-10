import React from 'react';
import './filterOptions.css'

class FilterOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterOptionChanged = this.handleFilterOptionChanged.bind(this);
    }

    handleFilterOptionChanged(e) {
      this.props.onFilterOptionChanged(e.target.value);
    }

    render() {
        const filterValue = this.props.filterValue;
        
        return (
            <div class="filterOptions">
                <input type="radio" name="filter" id="all" value="All" checked={filterValue === "All"} 
                    onChange={this.handleFilterOptionChanged} />
                <label for="all">All</label>
                <input type="radio" name="filter" id="active" value="Active" checked={filterValue === "Active"}
                    onChange={this.handleFilterOptionChanged} />
                <label for="active">Active</label>
                <input type="radio" name="filter" id="completed" value="Completed" checked={filterValue === "Completed"}
                    onChange={this.handleFilterOptionChanged} />
                <label for="completed">Completed</label>
            </div>
      );
    }
}

export default FilterOptions;
