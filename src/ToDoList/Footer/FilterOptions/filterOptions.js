import React from 'react';
import './filterOptions.css'

function FilterOptions(props) {
    function handleFilterOptionChanged(e) {
      props.onFilterOptionChanged(e.target.value);
    }

        return (
            <div class="filterOptions">
                <input type="radio" name="filter" id="all" value="All" checked={props.filterValue === "All"} 
                    onChange={handleFilterOptionChanged} />
                <label for="all">All</label>
                <input type="radio" name="filter" id="active" value="Active" checked={props.filterValue === "Active"}
                    onChange={handleFilterOptionChanged} />
                <label for="active">Active</label>
                <input type="radio" name="filter" id="completed" value="Completed" checked={props.filterValue === "Completed"}
                    onChange={handleFilterOptionChanged} />
                <label for="completed">Completed</label>
            </div>
      );
}

export default FilterOptions;
