import React from 'react';
import FilterOptions from './FilterOptions/filterOptions';
import './footer.css'

function Footer(props) {
    function handleFilterOptionChanged(filterValue) {
      props.onFilterOptionChanged(filterValue);
    }

    function handleClearCompleted() {
        props.onClearCompleted();
    }

    function getItemCountText() {
        let activeItems = props.items.filter(function(item){
            return !item.complete;
        });

        let itemCountText = activeItems.length + " items left";
        if (activeItems.length === 1){
            itemCountText = "1 item left";
        }

        return itemCountText;
    }

    function getClearCompletedButtonClass() {
        let completeItems = props.items.filter(function(item){
            return item.complete;
        });

        let clearCompleteButtonClassName = "clearCompletedButton";
        if (completeItems.length === 0){
            clearCompleteButtonClassName = "hidden";
        }

        return clearCompleteButtonClassName;
    }

        return (
            <div class="footer">
                <div class="itemCount">{getItemCountText()}</div>
                <FilterOptions filterValue={props.filterValue} onFilterOptionChanged={handleFilterOptionChanged} />
                <button class={getClearCompletedButtonClass()} onClick={handleClearCompleted} >Clear completed</button>
            </div>
        );
}

export default Footer;
