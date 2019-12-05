import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import * as LocalstorageHelper from "../../helpers/localstorageHelper";
import * as S from "../../styles";
import * as DS from "../bookDetail/bookDetailStyles";
import * as Res from "../../resources";
import TopBar from "../topBar/topBar";

function BookDetail(props) {
  const {
    match: { params }
  } = props;

  const bookShelves = LocalstorageHelper.getItem("bookShelves");

  const [book, setBook] = useState({
    volumeInfo: {
      imageLinks: { smallThumbnail: "" },
      title: "",
      authors: "",
      description: ""
    }
  });

  const [showMoreDescription, setShowMoreDescription] = useState(false);

  const [selectedShelf, setselectedShelf] = useState(bookShelves[0]);

  useEffect(() => {
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes/" + params.bookId
    ).then(({ data }) => {
      //console.log(data);
      setBook(data);
    });
  }, [params.bookId]);

  const onShowMoreDescriptionChanged = () => {
    setShowMoreDescription(!showMoreDescription);
  };

  const addBookToShelf = (shelfName, book) => {
    let currentBookList = LocalstorageHelper.getItem(shelfName);
    
    if (!currentBookList){
      currentBookList = [];
    }
    
    // TODO: check for duplicates
    let updatedBookList = [book, ...currentBookList];
    // add the new book in localstorage, but still show 3 or 10 items,
    // depending on the seeMoreItems flag
    LocalstorageHelper.setItem(shelfName, updatedBookList);

    return updatedBookList;
  }

  return (
    <Fragment>
      <TopBar />
      <S.CenteredContainer>
        <DS.BookDetailContainer>
          <S.ColumnFlex>
            <S.BookImage
              src={book.volumeInfo.imageLinks.smallThumbnail}
            ></S.BookImage>
          </S.ColumnFlex>

          <S.ColumnFlex>
            <S.BookTitle>{book.volumeInfo.title}</S.BookTitle>
            <S.BookAuthor>by {book.volumeInfo.authors}</S.BookAuthor>
            <DS.BookDescription
              showMoreDescription={showMoreDescription}
              dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
            />
            <S.TextLink onClick={onShowMoreDescriptionChanged}>
              {showMoreDescription ? Res.ShowLessCaption : Res.ShowMoreCaption}
            </S.TextLink>

            <DS.AddBookToShelf>
              <label>Add book to shelf:</label>
              <select onChange={(shelfName) => setselectedShelf(shelfName)}>
                {bookShelves.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select> 
              <button onClick={() => addBookToShelf(selectedShelf, book)}>Add</button>
            </DS.AddBookToShelf>

          </S.ColumnFlex>
        </DS.BookDetailContainer>
      </S.CenteredContainer>
    </Fragment>
  );
}

export default BookDetail;
