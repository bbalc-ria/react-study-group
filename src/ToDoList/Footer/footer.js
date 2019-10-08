import React from 'react';
import FilterOptions from './FilterOptions/filterOptions';
import './footer.css'

class Footer extends React.Component {
    render() {
        const filterValue = this.props.filterValue;
        const items = this.props.items;

        let activeItems = items.filter(function(item){
            return !item.complete;
        });

        let itemCountText = activeItems.length + " items left";
        if (activeItems.length === 1){
            itemCountText = "1 item left";
        }

        let completeItems = items.filter(function(item){
            return item.complete;
        });

        let clearCompleteButtonClassName = "clearCompletedButton";
        if (completeItems.length === 0){
            clearCompleteButtonClassName = "hidden";
        }
        
        return (
            <div class="footer">
                <div class="itemCount">{itemCountText}</div>
                <FilterOptions filterValue={filterValue}/>
                <button class={clearCompleteButtonClassName}>Clear completed</button>
            </div>
      );
    }
}

export default Footer;
