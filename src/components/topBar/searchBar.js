import React from "react";
import { withRouter } from "react-router-dom";
import * as Res from "../../resources";
import * as S from "../../styles";
import SearchBox from "../commonComponents/searchBox/searchBox";

function SearchBar(props) {
  const onSelect = (book) => {
    console.log(book);
    props.history.push("book/detail/" + book.id);
  }

  return (
    // here we can use the Search Box from Currently Reading
    <S.ColumnFlex  width={"40%"}>
      <SearchBox placeholder={Res.SearchPlaceholder} onSelect={onSelect} />
    </S.ColumnFlex>
  );
}

export default withRouter(SearchBar);
