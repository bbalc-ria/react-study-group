import React from 'react';

class FilterOptions extends React.Component {
    render() {
        const filterValue = this.props.filterValue;
        
        return (
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>

                Filter value = {filterValue}
            </div>
      );
    }
}

export default FilterOptions;
