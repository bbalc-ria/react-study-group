import React, { useState, useEffect } from "react";
import * as LocalstorageHelper from "../../helpers/localstorageHelper";
import * as S from "../../styles";
import * as SS from "../bookShelves/bookShelvesStyles";
import * as Res from "../../resources";

function BookShelvesList(props) {
  const [bookShelves, setBookShelves] = useState([]);

  useEffect(() => {
    let persistedShelves = LocalstorageHelper.getItem("bookShelves");

    // if the bookShelves persisted collection is empty, initialize it and 
    // update the localstorage item
    if (!persistedShelves) {
      persistedShelves = [
        Res.WantToReadCaption,
        Res.CurrentlyReadingCaption,
        Res.ReadCaption
      ];
      LocalstorageHelper.setItem("bookShelves", persistedShelves);
    }

    // represents a collection of {bookShelf, bookShelfItemsCount}
    let tempBookShelveCountPairs = [];

    persistedShelves.forEach(item => {
      let shelfItems = LocalstorageHelper.getItem(item);
      let shelfItemsCount = shelfItems ? shelfItems.length : 0;
      tempBookShelveCountPairs.push({ name: item, count: shelfItemsCount });
    });

    setBookShelves(tempBookShelveCountPairs);
  }, []);

  return (
    <S.ColumnFlex width={props.width}>
      <S.Title>{Res.BookShelvesCaption.toUpperCase()}</S.Title>
      <SS.BookShelvesList>
        {bookShelves.map((item, index) => (
          <SS.BookShelfItem key={index}>
              {item.count} {item.name}
          </SS.BookShelfItem>
        ))}
      </SS.BookShelvesList>
    </S.ColumnFlex>
  );
}

export default BookShelvesList;
