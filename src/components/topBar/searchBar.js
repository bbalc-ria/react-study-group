import React from "react";
import SearchBox from "../commonComponents/searchBox/searchBox";
import * as Res from "../../resources";
import * as S from "../../styles";

function SearchBar(props) {
  const onSelect = () => {

  }

  return (
    // here we can use the Search Box from Currently Reading
    <S.ColumnFlex  width={"40%"}>
      <SearchBox placeholder={Res.SearchPlaceholder} onSelect={onSelect} />
    </S.ColumnFlex>
  );
}

export default SearchBar;
