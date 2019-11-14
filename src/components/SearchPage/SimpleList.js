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
      <InfiniteScroll
        pageStart={0}
        loadMore={props.getData}
        hasMore={props.hasMore != undefined}
        loader={<div className="loader" key={0}>Loading ...</div>}
      // useWindow={true}
      >
        {props.locations && props.locations.map((x, index) => (
          <S.ListItem
            key={x.geometry}
            onMouseEnter={() => handleSelect(index)}
            onMouseLeave={() => handleDeselect(index)}
            selected={x.selected}
          >
            {x.name}
          </S.ListItem>
        ))}
      </InfiniteScroll>
    </S.List>
  )
}
