import React, { useState, useEffect } from "react";
import * as LocalstorageHelper from "../../helpers/localstorageHelper";
import * as S from "../../styles";
import * as SS from "../bookShelves/bookShelvesStyles";
import * as Res from "../../resources";

function BookShelvesList(props) {
  const [bookShelves, setBookShelves] = useState([]);

  useEffect(() => {
    //let persistedShelves = LocalstorageHelper.getItem("bookShelves");
    let persistedShelves = [Res.CurrentlyReadingCaption];

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
        {bookShelves.map(item => (
          <SS.BookShelfItem key={item}>
            <S.TextLink>
              {item.count} {item.name}
            </S.TextLink>
          </SS.BookShelfItem>
        ))}
      </SS.BookShelvesList>
    </S.ColumnFlex>
  );
}

export default BookShelvesList;
