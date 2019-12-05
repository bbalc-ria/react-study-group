import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import * as S from "../../styles";
import * as CS from "../currentlyReading/currentlyReadingStyles";
import * as Res from "../../resources";
import * as LocalstorageHelper from "../../helpers/localstorageHelper";
import SearchBox from "../commonComponents/searchBox/searchBox";
import SearchResultItem from "../currentlyReading/currentlyReadingItem";
import { useOutsideClick } from "../../helpers/customHooks";

function CurrentlyReading(props) {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [seeMoreItems, setSeeMoreItems] = useState(false);
  const [currentlyReadings, setCurrentlyReadings] = useState([]);
  const whenNotSeeMoreItemsCount = 3;
  const whenSeeMoreItemsCount = 10;

  // custom hook to hide the search box when clicking outside of this component
  const ref = useRef(null);
  useOutsideClick(ref, () => setShowSearchBox(false));

  useEffect(() => {
    let persistedReadings = LocalstorageHelper.getItem(
      Res.CurrentlyReadingCaption
    );
    if (!persistedReadings) persistedReadings = [];

    // at the beginning, show only the first 3 items
    if (persistedReadings.length > whenNotSeeMoreItemsCount)
      persistedReadings = persistedReadings.slice(0, whenNotSeeMoreItemsCount);

    setCurrentlyReadings(persistedReadings);
  }, []);

  const onSeeMoreItemsClick = () => {
    let persistedReadings = LocalstorageHelper.getItem(
      Res.CurrentlyReadingCaption
    );
    if (!persistedReadings) return;

    // when See more is clicked, show only the first 10 items
    if (persistedReadings.length > whenSeeMoreItemsCount)
      persistedReadings = persistedReadings.slice(0, whenSeeMoreItemsCount);

    setCurrentlyReadings(persistedReadings);
    setSeeMoreItems(true);
  };

  const onViewAllBooksClick = () => {
    props.history.push("/mybooks/" + Res.AllCaption);
  };

  const onAddBookClick = () => {
    // if search box is already displayed, return
    if (showSearchBox) return;
    setShowSearchBox(!showSearchBox);
  };

  const addBookToShelf = (shelfName, book) => {
    let currentBookList = LocalstorageHelper.getItem(shelfName);
    
    if (!currentBookList){
      currentBookList = [];
    }
    
      let updatedBookList = [book, ...currentBookList];
    // add the new book in localstorage, but still show 3 or 10 items,
    // depending on the seeMoreItems flag
    LocalstorageHelper.setItem(shelfName, updatedBookList);

    return updatedBookList;
  }

  const onSelectBook = book => {
    let tempReadings = addBookToShelf(Res.CurrentlyReadingCaption, book);

    tempReadings = seeMoreItems
      ? tempReadings.slice(0, whenSeeMoreItemsCount)
      : tempReadings.slice(0, whenNotSeeMoreItemsCount);

    setCurrentlyReadings(tempReadings);
  };

  return (
    <S.ColumnFlex width={props.width}>
      <S.Title>{Res.CurrentlyReadingCaption.toUpperCase()}</S.Title>
      <CS.CurrentlyReadingContainer ref={ref}>
        {currentlyReadings.map((book, index) => (
          <SearchResultItem book={book} key={index} />
        ))}

        {showSearchBox && (
          <SearchBox
            placeholder={Res.SearchPlaceholder}
            onSelect={onSelectBook}
          ></SearchBox>
        )}

        <S.RowFlex>
          {!seeMoreItems && (
            <S.TextLink onClick={onSeeMoreItemsClick}>
              {Res.SeeMoreCaption} |
            </S.TextLink>
          )}

          {seeMoreItems && (
            <S.TextLink onClick={onViewAllBooksClick}>
              {Res.ViewAllBooksCaption} |
            </S.TextLink>
          )}

          <S.TextLink onClick={onAddBookClick} disabled={showSearchBox}>
            {Res.AddBookCaption}
          </S.TextLink>
        </S.RowFlex>
      </CS.CurrentlyReadingContainer>
    </S.ColumnFlex>
  );
}

export default withRouter(CurrentlyReading);
