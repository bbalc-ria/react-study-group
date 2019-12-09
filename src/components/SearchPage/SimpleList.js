import React, { useState, useEffect } from "react";
import * as S from "./SearchPageStyle";
import InfiniteScroll from "react-infinite-scroller";
import { maxHeaderSize } from "http";
import { navigate } from "@reach/router";
export default function SimpleList(props) {
  let handleSelect = index => {
    props.select(index);
  };
  let handleDeselect = index => {
    props.deselect(index);
  };
  let handleClick = x => {
    navigate("/place/" + x.id);
  };
  return (
    <S.List>
      {props.locations &&
        props.locations.map((x, index) => (
          <S.ListItem
            onClick={() => handleClick(x)}
            key={"li" + x.id}
            onMouseEnter={() => handleSelect(index)}
            onMouseLeave={() => handleDeselect(index)}
            selected={x.selected}
          >
            <S.T>{x.title}</S.T>
            <S.AdditionalInfoContainer>
              <S.Rating>{x.rating}</S.Rating>
              with {x.rating_mean} ratings
            </S.AdditionalInfoContainer>
          </S.ListItem>
        ))}
    </S.List>
  );
}
