import React from "react";
import * as Res from "../../resources";
import * as S from "../../styles";
import BookShelvesEdit from "../bookShelves/bookShelvesEdit";
import TopBar from "../topBar/topBar";

function MyBooks(props) {
  return (
    <S.ColumnFlex>
      <TopBar />
      <S.Title>{Res.MyBooksCaption.toUpperCase()}</S.Title>
      <S.RowFlex>
        <BookShelvesEdit></BookShelvesEdit>
      </S.RowFlex>
    </S.ColumnFlex>
  );
}

export default MyBooks;
