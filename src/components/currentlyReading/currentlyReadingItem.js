import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import * as S from "../../styles";

function SearchResultItem(props) {
  const volumeInfo = props.book.volumeInfo;
  const bookUrl = "/book/detail/" + props.book.id;

  return (
    <S.RowFlex>
      <Link to={bookUrl}>
        <S.MidleBookImage
          src={
            volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : ""
          }
        ></S.MidleBookImage>
      </Link>

      <S.ColumnFlex>
        <S.StyledLink to={bookUrl}>
          <S.SmallBookTitle>{volumeInfo.title}</S.SmallBookTitle>
        </S.StyledLink>
        <S.SmallBookAuthor>by {volumeInfo.authors}</S.SmallBookAuthor>
      </S.ColumnFlex>
    </S.RowFlex>
  );
}

export default withRouter(SearchResultItem);
