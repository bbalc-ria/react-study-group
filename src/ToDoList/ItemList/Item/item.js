import React from 'react';
import RoundCheckbox from './../../roundCheckbox';
import styled from 'styled-components';

const ListItem = styled.li`
    padding-top: 4px;
    padding-bottom: 4px;
`;

const DeleteButton = styled.button`
    background-color: transparent; 
    border: none; 
    color: white; 
    padding: 8px 16px; 
    font-size: 14px; 
    cursor: pointer; 
    float: right;
    width:48px;
    background-image: 
`;

function Item(props) {
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
                    {props.name}
                    <DeleteButton onClick={handleItemRemoved}>
                        X
                    </DeleteButton>
            </ListItem>
      );
}

export default Item;
