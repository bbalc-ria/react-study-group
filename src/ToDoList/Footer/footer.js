import React from 'react';
import styled from 'styled-components';
import FilterOptions from './FilterOptions/filterOptions';

const FooterContainer = styled.div`
    font-size: 18px;
    height:30px;
    border-top: 1px solid lightgrey;
    padding-top: 10px;
`;

const ClearCompleteButton = styled.button`
    background-color: transparent; 
    border: none; 
    color: white; 
    padding: 2px; 
    padding-top:5px;
    font-size: 15px; 
    cursor: pointer; 
    float: right;
    display: ${props => props.hidde ? "hidden" :"" };
`;

const ItemCounter = styled.div`
    display:inline-block;
    width:100px;
`;

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

    function hideClearCompletedButton() {
        let completeItems = props.items.filter(function(item){
            return item.complete;
        });

        if (completeItems.length === 0){
            return true;
        }

        return false;
    }

        return (
            <FooterContainer>
                <ItemCounter>{getItemCountText()}</ItemCounter>
                <FilterOptions filterValue={props.filterValue} onFilterOptionChanged={handleFilterOptionChanged} />
                <ClearCompleteButton hidden={hideClearCompletedButton()} onClick={handleClearCompleted} >Clear completed</ClearCompleteButton>
            </FooterContainer>
        );
}

export default Footer;
