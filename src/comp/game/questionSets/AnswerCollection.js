import React, { useState, useEffect } from "react";
import * as S from "./QuestionSetsStyle";
import Answer from "./Answer";

function AnswersCollection({ onSelect, answers, selected, correct }) {
  const renderAnswers = () => {
    if (answers === undefined) return null;

    return answers.map((element, index) => {
      return (
        <S.AnswerWrapper key={index}>
          <Answer
            onSelect={onSelect}
            index={index}
            selected={selected}
            element={element}
            correct={correct}
          />
        </S.AnswerWrapper>
      );
    });
  };

//   console.log(
//     "AnswersCollection - Rendering answer collection, selected:",
//     selected,
//     " correct:",
//     correct,
//     " answers:",
//     answers
//   );

  return <S.AnswersContainers>{renderAnswers()}</S.AnswersContainers>;
}

export default AnswersCollection;
