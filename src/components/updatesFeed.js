import React from "react";
import * as S from "../styles";
import UpdatesFeedItem from "./updatesFeedItem"
import { books } from "../data/books";


function UpdatesFeed(props) {

  function getFeedItems() {
        let feedItems = books.map((book, index) => 
            <UpdatesFeedItem book={book} key={index} />
        );

        return feedItems;
  }

  return (
    <S.ColumnFlex>
      <div>UPDATES</div>
      <div>Customize</div>
      <ul>
        {getFeedItems()}
      </ul>
    </S.ColumnFlex>
  );
}

export default UpdatesFeed;
