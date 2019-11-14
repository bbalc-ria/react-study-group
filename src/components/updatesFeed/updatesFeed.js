import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as S from "../../styles";
import * as FS from "./updatesFeedStyles";
import UpdatesFeedItem from "./updatesFeedItem";

function UpdatesFeed(props) {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    Axios
     .get(
       "https://www.googleapis.com/books/v1/volumes?q=react&orderBy=newest"
     )
     .then(({ data }) => {
       //console.log(data);
       setBooks(data.items);
     });
  }, [])

  return (
    <S.ColumnFlex>
      <FS.BookUpdatesTitle>
        UPDATES
      </FS.BookUpdatesTitle>
      <FS.BookUpdatesContainer>
        {
          books.map((book, index) => 
              <UpdatesFeedItem book={book} key={index} />
          )
        }
      </FS.BookUpdatesContainer>
    </S.ColumnFlex>
  );
}

export default UpdatesFeed;
