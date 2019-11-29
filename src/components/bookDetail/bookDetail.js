import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import * as S from "../../styles";
import * as DS from "../bookDetail/bookDetailStyles";
import * as Res from "../bookDetail/bookDetailResources";
import TopBar from "../topBar/topBar";

function BookDetail(props) {
  const {
    match: { params }
  } = props;

  const [volumeInfo, setVolumeInfo] = useState({
    imageLinks: { smallThumbnail: "" },
    title: "",
    authors: "",
    description: ""
  });

  const [showMoreDescription, setShowMoreDescription] = useState(false);

  useEffect(() => {
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes/" + params.bookId
    ).then(({ data: { volumeInfo } }) => {
      setVolumeInfo(volumeInfo);
    });
  }, [params.bookId]);

  const onShowMoreDescriptionChanged = () => {
    setShowMoreDescription(!showMoreDescription);
  };

  return (
    <Fragment>
      <TopBar />
      <S.CenteredContainer>
        <DS.BookDetailContainer>
          <S.ColumnFlex>
            <S.BookImage
              src={volumeInfo.imageLinks.smallThumbnail}
            ></S.BookImage>
          </S.ColumnFlex>

          <S.ColumnFlex>
            <S.BookTitle>{volumeInfo.title}</S.BookTitle>
            <S.BookAuthor>by {volumeInfo.authors}</S.BookAuthor>
            <DS.BookDescription
              showMoreDescription={showMoreDescription}
              dangerouslySetInnerHTML={{ __html: volumeInfo.description }}
            />
            <S.TextLink onClick={onShowMoreDescriptionChanged}>
              {showMoreDescription ? Res.ShowLessCaption : Res.ShowMoreCaption}
            </S.TextLink>
          </S.ColumnFlex>
        </DS.BookDetailContainer>
      </S.CenteredContainer>
    </Fragment>
  );
}

export default BookDetail;
