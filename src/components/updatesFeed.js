import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as S from "../styles";
import UpdatesFeedItem from "./updatesFeedItem"
//import { books } from "../data/books";

function UpdatesFeed(props) {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    Axios
     .get(
       "https://www.googleapis.com/books/v1/volumes?q=test"
       , { crossdomain: true }
     )
     .then(({ data }) => {
       console.log(data);
      //setBooks(data);
     });
  }, [])

  function getFeedItems() {

        let feedItems = books.map((book, index) => 
            <UpdatesFeedItem book={book} key={index} />
        );

        return feedItems;
  }

  return (
    <S.ColumnFlex>
      <S.BookUpdatesTitle>
        UPDATES
      </S.BookUpdatesTitle>
      <S.BookUpdatesContainer>
        {getFeedItems()}
      </S.BookUpdatesContainer>
    </S.ColumnFlex>
  );
}

export default UpdatesFeed;
