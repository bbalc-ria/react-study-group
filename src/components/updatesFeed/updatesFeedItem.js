import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import * as S from "../../styles";
import * as IS from "./updatesFeedStyles";

function UpdatesFeedItem(props) {
  const volumeInfo = props.book.volumeInfo;
  const bookUrl = "/book/detail/" + props.book.id;

  return (
    <IS.BookUpdateItemContainer>
      <S.RowFlex>
        <Link to={bookUrl}>
          <S.BookImage src={volumeInfo.imageLinks.smallThumbnail}></S.BookImage>
        </Link>
        <S.ColumnFlex>
          <Link to={bookUrl}>
            <IS.BookTitleLink>{volumeInfo.title}</IS.BookTitleLink>
          </Link>
          <S.BookAuthor>by {volumeInfo.authors}</S.BookAuthor>
        </S.ColumnFlex>
      </S.RowFlex>
    </IS.BookUpdateItemContainer>
  );
}

export default withRouter(UpdatesFeedItem);
