import React from "react";
import * as S from "../styles";
import { books } from "../data/books";

function BookDetail(props) {
  const {
    match: { params }
  } = props;

  const book = books.find(book => book.bookId === params.bookId);

  return (
    <S.BookDetailContainer>
      <S.RowFlex>
        <S.BookImage src={book.imageUrl}></S.BookImage>
        <S.ColumnFlex>
          <S.BookTitle>{book.title}</S.BookTitle>
          <S.BookAuthor>by {book.author.name}</S.BookAuthor>
          <S.BookDescription>{book.description.html}</S.BookDescription>
        </S.ColumnFlex>
      </S.RowFlex>
    </S.BookDetailContainer>
  );
}

export default BookDetail;
