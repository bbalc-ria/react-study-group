import React, { useState, useEffect } from "react";
import * as S from "./SearchPageStyle";
import InfiniteScroll from "react-infinite-scroller";
import { maxHeaderSize } from "http";

export default function SimpleList(props) {
  let handleSelect = index => {
    props.select(index);
  };
  let handleDeselect = index => {
    props.deselect(index);
  };
  return (
    <S.List>
      {props.locations &&
        props.locations.map((x, index) => (
          <S.ListItem
            key={x.name + x.geometry.location.lat + x.geometry.location.lng}
            onMouseEnter={() => handleSelect(index)}
            onMouseLeave={() => handleDeselect(index)}
            selected={x.selected}
          >
            <S.T>{x.name}</S.T>
            <S.AdditionalInfoContainer>
              <S.Rating>
                {x.rating} {x.types[0]}
              </S.Rating>
              with {x.user_ratings_total} ratings
            </S.AdditionalInfoContainer>
          </S.ListItem>
        ))}
    </S.List>
  );
}
