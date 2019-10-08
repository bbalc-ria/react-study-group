import React from 'react';
import './filterOptions.css'

class FilterOptions extends React.Component {
    render() {
        const filterValue = this.props.filterValue;
        
        return (
            <div class="filterOptions">
                <input type="radio" name="filter" id="all" value="All" checked={filterValue === "All"}/>
                <label for="all">All</label>
                <input type="radio" name="filter" id="active" value="Active" checked={filterValue === "Active"}/>
                <label for="active">Active</label>
                <input type="radio" name="filter" id="completed" value="Completed" checked={filterValue === "Completed"}/>
                <label for="completed">Completed</label>
            </div>
      );
    }
}

export default FilterOptions;
