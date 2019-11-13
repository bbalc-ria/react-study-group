import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import * as S from "../styles";


function UpdatesFeedItem(props) {
  const book = props.book;
  const bookUrl = "/book/detail/" + props.book.bookId;

  return (
    <S.BookUpdateItemContainer>
    <S.RowFlex>
      <Link to={bookUrl}>
        <S.BookImage src={book.imageUrl}></S.BookImage>
      </Link>          
      <S.ColumnFlex>
        <Link to={bookUrl}>
          <S.BookTitleLink>{book.title}</S.BookTitleLink>
        </Link>          
        <S.BookAuthor>by {book.author.name}</S.BookAuthor>
      </S.ColumnFlex>
    </S.RowFlex>
  </S.BookUpdateItemContainer>
  );
}

export default withRouter(UpdatesFeedItem);
