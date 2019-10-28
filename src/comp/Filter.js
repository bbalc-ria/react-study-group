import React from "react";
import Button from "./Button";
import * as S from "./Styles";

function Filter({ setFilter, activeFilter }) {
  return (
    <S.FilterContainer>
      <Button
        active={activeFilter === 0}
        onClick={() => setFilter(element => element, 0)}
        text="All"
      />
      <Button
        active={activeFilter === 1}
        onClick={() => setFilter(element => !element.checked, 1)}
        text="Active"
      />
      <Button
        active={activeFilter === 2}
        onClick={() => setFilter(element => element.checked, 2)}
        text="Completed"
      />
    </S.FilterContainer>
  );
}

export default Filter;
