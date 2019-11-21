import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as S from "../styles";
import TopBar from "./topBar/topBar";

function BookDetail(props) {
  const {
    match: { params }
  } = props;

  const [volumeInfo, setVolumeInfo] = useState({imageLinks: {smallThumbnail: ""}, title: "", authors: "", description: ""});
  
  useEffect(() => {
    Axios
     .get(
       "https://www.googleapis.com/books/v1/volumes/" + params.bookId
     )
     .then(({ data }) => {
       //console.log(data);
       setVolumeInfo(data.volumeInfo);
     });
  }, [params.bookId])

  return (
    <div>
      <TopBar/>
      <S.BookDetailContainer>
        <S.RowFlex>
          <div>
            <S.BookImage src={volumeInfo.imageLinks.thumbnail}></S.BookImage>
          </div>
          <S.ColumnFlex>
            <S.BookTitle>{volumeInfo.title}</S.BookTitle>
            <S.BookAuthor>by {volumeInfo.authors}}</S.BookAuthor>
            <S.BookDescription dangerouslySetInnerHTML={{__html: volumeInfo.description}}/>
          </S.ColumnFlex>
        </S.RowFlex>
    </S.BookDetailContainer>
    </div>
  );
}

export default BookDetail;
