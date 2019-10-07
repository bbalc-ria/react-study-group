import React from 'react';
import FilterOptions from './FilterOptions/filterOptions';

class Footer extends React.Component {
    render() {
        const filterValue = this.props.filterValue;
        const itemCount = this.props.itemCount;
        
        return (
            <div>
                {itemCount} items left
                <FilterOptions filterValue={filterValue}/>
                <button>Clear completed</button>
            </div>
      );
    }
}

export default Footer;
