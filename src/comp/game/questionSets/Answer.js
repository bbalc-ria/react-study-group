import React, { useState, useEffect } from "react";
import * as S from "./QuestionSetsStyle";

function Answer({ onSelect, index, selected, element, correct }) {
  return (
    <S.Answer
      onClick={() => {
        if (selected === undefined) {
          onSelect(index);
        }
      }}
      disabled={selected !== undefined || correct !== undefined}
      correct={correct !== undefined && index === correct}
      incorrect={
        selected !== undefined && index === selected && correct !== undefined
      }
      selected={selected !== undefined && index === selected}
    >
      {element}
    </S.Answer>
  );
}

export default Answer;
