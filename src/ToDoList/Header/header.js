import React from 'react';
import styled from 'styled-components';
import RoundCheckbox from '../roundCheckbox';

const HeaderContainer = styled.div`
    border-bottom:1px solid lightgrey;
    padding-bottom: 20px;
`;

const BorderlessInput = styled.input`
    border:none;
    border-color: transparent;
    background-color: dimgray;
    height: 40px;
    vertical-align: middle;
    width: 400px;
    font-size: 24px;
    color: lightgray;
    padding-left: 10px;
    padding-right: 10px;

    ::placeholder {
        color: darkgrey;
    }
`;

function Header(props) {
    function handleKeyDown(e) {
        if (e.key === "Enter"){
            props.onItemAdded(e.target.value);
            e.target.value = "";
        }
    }

    function handleCheckAll(e) {
        props.onCheckAll(e.target.checked);
    }
    
    function allItemsChecked(items) {
        let incompleteItems = props.items.filter(function(item){
            return !item.complete;
        });

        if (incompleteItems.length === 0){
            return true;
        }

        return false;
    }

    return (
        <HeaderContainer>
            <RoundCheckbox>
                    <input type="checkbox" id="checkbox"
                        onChange={handleCheckAll} checked={allItemsChecked()} />
                    <label for="checkbox"></label>
                </RoundCheckbox>
                <BorderlessInput id="addNewItem" placeholder="What needs to be done?"
                    onKeyDown={handleKeyDown} />
            </HeaderContainer>
            
      );
}

export default Header;
