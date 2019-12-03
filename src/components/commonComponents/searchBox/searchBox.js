import React, { useState } from "react";
import Axios from "axios";
import * as S from "../../../styles";
import * as SS from "../searchBox/searchBoxStyles";
import SearchResultItem from "../searchBox/searchResultItem";

function SearchBox(props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onSearchChange = event => {
    let value = event.target.value;
    setSearchValue(value);

    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        value +
        "&orderBy=newest"
    ).then(({ data }) => {
      setSearchResults(data.items);
    }).catch(error => {
      console.log(error);
    });
  };

  const onSelectBook = (book) =>{
    setSearchValue("");
    setSearchResults([]);
    props.onSelect(book);
  }

  return (
      <SS.SearchBox>
        <S.Input
          placeholder={props.placeholder}
          onChange={onSearchChange}
          value={searchValue}
        ></S.Input>

        {searchResults && (
          <SS.SearchDropDown>
            {searchResults.map((book, index) => (
              <SS.ResultListItem key={index} onClick={() => onSelectBook(book)}>
                <SearchResultItem book={book} />
              </SS.ResultListItem>
            ))}
          </SS.SearchDropDown>
        )}
      </SS.SearchBox>
  );
}

export default SearchBox;
