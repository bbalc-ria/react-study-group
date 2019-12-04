import React from "react";
import * as S from "../../styles";

function CoverView(props) {
  return (
    <S.ColumnFlex width={props.width}>
      <S.RowFlex>
        {props.books.map((book, index) => (
          <S.StyledLink to={"/book/detail/" + book.id}>
            <S.MidleBookImage
              key={index}
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.smallThumbnail
                  : ""
              }
              title={book.volumeInfo.title + " - " + book.volumeInfo.authors}
            />
          </S.StyledLink>
        ))}
      </S.RowFlex>
    </S.ColumnFlex>
  );
}

export default CoverView;
