import React, { useState } from "react";
import * as S from "../../styles";
import * as SS from "../bookShelves/bookShelvesStyles";
import * as Res from "../../resources";

function AddBookShelfItem(props) {
  const [shelfName, setShelfName] = useState("");

  const onShelfNameChanged = event => {
    setShelfName(event.target.value);
  };

  const onAddClick = () => {
    if (!shelfName) return;
    props.onAddClick(shelfName);
    setShelfName("");
  };

  const onKeyDown = event => {
    if (event.keyCode === 13) {
      onAddClick();
    }
  };

  return (
    <S.ColumnFlex>
      <SS.Label>{Res.AddAShelfCaption}</SS.Label>
      <S.RowFlex>
        <S.Input
          value={shelfName}
          onChange={onShelfNameChanged}
          onKeyDown={onKeyDown}
        ></S.Input>
        <SS.Button disabled={!shelfName} onClick={onAddClick}>
          {Res.AddCaption}
        </SS.Button>
      </S.RowFlex>
    </S.ColumnFlex>
  );
}

export default AddBookShelfItem;
