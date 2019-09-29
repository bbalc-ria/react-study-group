import React from 'react'
import * as S from '../../../shared/style';

const ToDoItem = ({ item, onSelected }) => {

    const handleOnSelected = () => {
        onSelected(item.id);
    };

    let backgroundClassName;
    if (item.isSelected) {
        backgroundClassName = "bg-success";
    }

    return (
        <S.StyledListItem
            onClick={handleOnSelected}
            className={backgroundClassName}>
            <S.CenteredDiv isSelected={item.isSelected}>
                {item.title}
            </S.CenteredDiv>
        </S.StyledListItem>
    )
};

export default ToDoItem;