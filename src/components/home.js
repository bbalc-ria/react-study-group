import React from "react";
import UpdatesFeed from "./updatesFeed/updatesFeed";
import TopBar from "./topBar/topBar";
import * as S from "../styles";
import CurrentlyReading from "./currentlyReading/currentlyReading";
import BookShelvesList from "./bookShelves/bookShelvesList";

function Home(props) {
  return (
    <S.ColumnFlex>
      <TopBar />
      <S.RowFlex>
        <S.ColumnFlex width={"25%"}>
          <CurrentlyReading />
          <BookShelvesList />
        </S.ColumnFlex>
        <UpdatesFeed width={"50%"} />
      </S.RowFlex>
    </S.ColumnFlex>
  );
}

export default Home;
