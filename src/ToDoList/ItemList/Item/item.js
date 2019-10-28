import React from 'react';
import styled from 'styled-components';
import RoundCheckbox from './../../roundCheckbox';

const DeleteButton = styled.button`
    background-color: transparent; 
    border: none; 
    color: red; 
    padding: 8px 16px; 
    font-size: 14px; 
    cursor: pointer; 
    float: right;
    width:48px;
    display: none;
    outline: none;
`;

const ListItem = styled.li`
    padding-bottom: 4px;
    margin-top: 4px;
    margin-bottom: 4px;

    :hover {
        background-color: rgba(100, 100, 100, 0.2);
    }

    :hover ${DeleteButton} {
        display: block;
    }
`;

function Item(props) {

    /*function initEditMode() {
        
    }

    function handleKeyDown(e) {
        if (e.key === "Enter"){
            props.onItemNameChanged(e.target.value);
        }
    }*/

    function handleItemRemoved() {
        props.onItemRemoved();
    }

    function handleItemCompleted() {
        props.onItemCompleted();
    }

        return (
            <ListItem>
                <RoundCheckbox>
                    <input type="checkbox" id={props.id} checked={props.complete?"checked":""}
                        onClick={handleItemCompleted} />
                    <label for={props.id}></label>
                </RoundCheckbox>
                {/* <span onDoubleClick={initEditMode} >{props.name}</span>
                <input onKeyDown={handleKeyDown} /> */}
                {props.name}
                <DeleteButton onClick={handleItemRemoved}>
                    &#x2716;
                </DeleteButton>
            </ListItem>
      );
}

export default Item;
