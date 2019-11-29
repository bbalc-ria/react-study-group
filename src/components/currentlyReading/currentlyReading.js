import React, { useState, useEffect } from "react";
import * as S from "../../styles";
import * as CS from "../currentlyReading/currentlyReadingStyles";
import * as Res from "../currentlyReading/currentyReadingResources";
import * as SharedRes from "../../resources";
import SearchBox from "../commonComponents/searchBox/searchBox";
import SearchResultItem from "../currentlyReading/currentlyReadingItem";

function CurrentlyReading(props) {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [currentlyReadings, setCurrentlyReadings] = useState([]);

  useEffect(() => {
    let persistedReadings = JSON.parse(
      localStorage.getItem("currentlyReadings")
    );
    if (!persistedReadings) persistedReadings = [];
    setCurrentlyReadings(persistedReadings);
  }, []);

  const onAddBookClick = () => {
    // if search box is already displayed, return
    if (showSearchBox) return;
    setShowSearchBox(!showSearchBox);
  };

  const onSelectBook = book => {
    let persistedReadings = JSON.parse(
      localStorage.getItem("currentlyReadings")
    );

    if (!persistedReadings) persistedReadings = [];
    let tempReadings = [...persistedReadings, book];
    setCurrentlyReadings(tempReadings);

    localStorage.setItem(
      "currentlyReadings",
      JSON.stringify(tempReadings)
    );
  };

  return (
    <S.ColumnFlex width={props.width}>
      <S.Title>{Res.CurrentlyReadingCaption.toUpperCase()}</S.Title>
      <CS.CurrentlyReadingContainer>
        {currentlyReadings.map((book, index) => (
          <SearchResultItem book={book} key={index} />
        ))}

        {showSearchBox && (
          <SearchBox
            placeholder={SharedRes.SearchPlaceholder}
            onSelect={onSelectBook}
          ></SearchBox>
        )}

        <S.RowFlex>
          <S.TextLink>{Res.SeeMoreCaption} |</S.TextLink>
          <S.TextLink onClick={onAddBookClick} disabled={showSearchBox}>
            {Res.AddBookCaption}
          </S.TextLink>
        </S.RowFlex>
      </CS.CurrentlyReadingContainer>
    </S.ColumnFlex>
  );
}

export default CurrentlyReading;
