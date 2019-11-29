import React from "react";
import UpdatesFeed from "./updatesFeed/updatesFeed";
import TopBar from "./topBar/topBar";
import * as S from "../styles";
import CurrentlyReading from "./currentlyReading/currentlyReading";

function Home(props) {
  return (
    <S.ColumnFlex>
      <TopBar />
      <S.RowFlex>
        <CurrentlyReading width={"25%"} />
        <UpdatesFeed width={"50%"} />
      </S.RowFlex>
    </S.ColumnFlex>
  );
}

export default Home;
