import React, { useState, useEffect } from "react";
import * as S from './SearchPageStyle';
import InfiniteScroll from 'react-infinite-scroller';

export default function SimpleList(props) {

  let handleSelect = (index) => {
    props.select(index);
  }
  let handleDeselect = (index) => {
    props.deselect(index);
  }
  return (
    <S.List>

      {props.locations && props.locations.map((x, index) => (
        <S.ListItem
          key={x.name}
          onMouseEnter={() => handleSelect(index)}
          onMouseLeave={() => handleDeselect(index)}
          selected={x.selected}
        >
          <di>
            {x.name}
          </di>
          <S.Rating>{x.rating}</S.Rating>
        </S.ListItem>
      ))}

    </S.List>
  )
}
