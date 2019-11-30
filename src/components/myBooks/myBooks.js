import React, { useState, useEffect } from "react";
import * as Res from "../../resources";
import * as S from "../../styles";
import BookShelvesEdit from "../bookShelves/bookShelvesEdit";
import TopBar from "../topBar/topBar";
import CoverView from "./coverView";
import GridView from "./gridView";
import * as LocalstorageHelper from "../../helpers/localstorageHelper";

function MyBooks(props) {
  const {
    match: { params }
  } = props;

  const [books, setBooks] = useState([]);
  const [isCoverView, setIsCoverView] = useState(true);

  useEffect(() => {
    let shelfName = params.shelfName;
    if (!shelfName) shelfName = Res.AllCaption;
    onBookShelfSelected(shelfName);
  }, [params.shelfName]);

  const onBookShelfSelected = shelfName => {
    if (!shelfName) return;
    let tempBooks = [];

    if (shelfName === Res.AllCaption) {
      let shelves = LocalstorageHelper.getItem("bookShelves");
      shelves.forEach(shelf => {
        if (!shelf) return;
        let shelfBooks = LocalstorageHelper.getItem(shelf);

        if (!shelfBooks) shelfBooks = [];
        tempBooks = [...tempBooks, ...shelfBooks];
      });
    } else {
      tempBooks = LocalstorageHelper.getItem(shelfName);
    }
    setBooks(tempBooks);
  };

  return (
    <S.ColumnFlex>
      <TopBar />
      <S.RowFlex>
        <S.Title>{Res.MyBooksCaption.toUpperCase()}</S.Title>
        <S.RightAlignContainer>
          <S.ButtonIcon
            onClick={() => setIsCoverView(true)}
            selected={isCoverView}
          >
            <S.Icon
              src="https://s.gr-assets.com/assets/layout/list-fe412c89a6a612c841b5b58681660b82.png"
              title={Res.CoverViewTitle}
            ></S.Icon>
          </S.ButtonIcon>

          <S.ButtonIcon
            onClick={() => setIsCoverView(false)}
            selected={!isCoverView}
          >
            <S.Icon
              src="https://s.gr-assets.com/assets/layout/grid-2c030bffe1065f73ddca41540e8a267d.png"
              title={Res.GridViewTitle}
            ></S.Icon>
          </S.ButtonIcon>
        </S.RightAlignContainer>
      </S.RowFlex>

      <S.RowFlex>
        <BookShelvesEdit
          width="20%"
          onBookShelfSelected={onBookShelfSelected}
          initialSelectedBookShelf={params.shelfName || Res.AllCaption}
        ></BookShelvesEdit>

        {books && (
          <React.Fragment>
            {isCoverView && <CoverView width="50%" books={books}></CoverView>}

            {!isCoverView && <GridView width="50%" books={books}></GridView>}
          </React.Fragment>
        )}

        {!books && <S.InfoMessage>{Res.NoItemsCaption}</S.InfoMessage>}
      </S.RowFlex>
    </S.ColumnFlex>
  );
}

export default MyBooks;
