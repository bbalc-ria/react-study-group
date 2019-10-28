import React from 'react';
import RoundCheckbox from '../roundCheckbox';
import styled from 'styled-components';

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

        return (
            <HeaderContainer>
                <RoundCheckbox>
                    <input type="checkbox" id="checkbox"
                        onChange={handleCheckAll} />
                    <label for="checkbox"></label>
                </RoundCheckbox>
                <BorderlessInput id="addNewItem" placeholder="What needs to be done?"
                    onKeyDown={handleKeyDown} />
            </HeaderContainer>
            
      );
}

export default Header;
