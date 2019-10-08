import React from 'react';
import FilterOptions from './FilterOptions/filterOptions';
import './footer.css'

class Footer extends React.Component {
    render() {
        const filterValue = this.props.filterValue;
        const itemCount = this.props.itemCount;
        
        return (
            <div class="footer">
                <div class="itemCount">{itemCount} items left</div>
                <FilterOptions filterValue={filterValue}/>
                <button class="clearCompletedButton">Clear completed</button>
            </div>
      );
    }
}

export default Footer;
