import React from "react";
import { withRouter } from "react-router";
import * as S from "../../../styles";

function SearchResultItem(props) {
  const volumeInfo = props.book.volumeInfo;

  return (
    volumeInfo && (
      <S.RowFlex>
        <S.SmallBookImage
          src={
            volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : ""
          }
        ></S.SmallBookImage>
        <S.ColumnFlex>
          <S.SmallBookTitle>{volumeInfo.title}</S.SmallBookTitle>
          <S.SmallBookAuthor>by {volumeInfo.authors}</S.SmallBookAuthor>
        </S.ColumnFlex>
      </S.RowFlex>
    )
  );
}

export default withRouter(SearchResultItem);
