import React, { useState, useEffect } from "react";
import * as LocalstorageHelper from "../../helpers/localstorageHelper";
import * as S from "../../styles";
import * as SS from "../bookShelves/bookShelvesStyles";
import * as Res from "../../resources";
import AddBookShelfItem from "./addBookShelfItem";

function BookShelvesEdit(props) {
  const [bookShelves, setBookShelves] = useState([]);
  const [addShelfClicked, setAddShelfClicked] = useState(false);

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
    let allCount = 0;

    persistedShelves.forEach(item => {
      let shelfItems = LocalstorageHelper.getItem(item);
      let shelfItemsCount = shelfItems ? shelfItems.length : 0;
      tempBookShelveCountPairs.push({ name: item, count: shelfItemsCount });
      allCount += shelfItemsCount;
    });

    // add "All" item to the displayed bookShelves collection
    tempBookShelveCountPairs = [
      { name: Res.AllCaption, count: allCount },
      ...tempBookShelveCountPairs
    ];

    setBookShelves(tempBookShelveCountPairs);
  }, []);

  const onAddShelfClicked = () => {
    setAddShelfClicked(true);
  };

  const onAddNewShelf = shelfName => {
    let persistedShelves = LocalstorageHelper.getItem("bookShelves");
    if (persistedShelves.indexOf(shelfName) > -1) {
      alert(Res.ShelfAlreadyExistsMessage);
      return;
    }

    // in localstorage we keep only the shelves names
    let tempPersistedShelves = [...persistedShelves, shelfName];
    LocalstorageHelper.setItem("bookShelves", tempPersistedShelves);

    // in state we keep a dictionary of {shelf name, count of items}
    let tempShelves = [...bookShelves, { name: shelfName, count: 0 }];
    setBookShelves(tempShelves);
  };

  return (
    <S.ColumnFlex width={props.width}>
      <S.Title>{Res.BookShelvesCaption}</S.Title>
      <SS.BookShelvesList>
        {bookShelves.map((item, index) => (
          <SS.BookShelfItem key={index}>
            <S.TextLink>
              {item.name} ({item.count})
            </S.TextLink>
          </SS.BookShelfItem>
        ))}
      </SS.BookShelvesList>

      {addShelfClicked && (
        <AddBookShelfItem onAddClick={onAddNewShelf}></AddBookShelfItem>
      )}

      {!addShelfClicked && (
        <SS.Button onClick={onAddShelfClicked}>{Res.AddShelfCaption}</SS.Button>
      )}
    </S.ColumnFlex>
  );
}

export default BookShelvesEdit;
