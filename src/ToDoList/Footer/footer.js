import React from 'react';
import FilterOptions from './FilterOptions/filterOptions';
import './footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterOptionChanged = this.handleFilterOptionChanged.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
    }

    handleFilterOptionChanged(filterValue) {
      this.props.onFilterOptionChanged(filterValue);
    }

    handleClearCompleted() {
        this.props.onClearCompleted();
    }

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
                <FilterOptions filterValue={filterValue} onFilterOptionChanged={this.handleFilterOptionChanged} />
                <button class={clearCompleteButtonClassName} onClick={this.handleClearCompleted} >Clear completed</button>
            </div>
      );
    }
}

export default Footer;
