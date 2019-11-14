import React from "react";
import * as S from "./QuestionSetsStyle";

function QuestionSet({ onSelect, questionSet, selected, correct }) {
  if (!questionSet) questionSet = { question: "", answers: [] };

  const renderAnswers = () => {
    return questionSet.answers.map((element, index) => {
      return (
        <S.AnswerWrapper key={index}>
          {getAnswer(element, index)}
        </S.AnswerWrapper>
      );
    });
  };

  const getAnswer = (element, index) => {
    if (correct && index === correct) {
      return <S.CorrectAnswer>{element}</S.CorrectAnswer>;
    }

    if (index === selected) {
      if (correct) return <S.IncorrectAnswer>{element}</S.IncorrectAnswer>;
      return <S.SelectedAnswer>{element}</S.SelectedAnswer>;
    }

    console.log("disabled", selected !== undefined);

    return (
      <S.Answer
        onClick={() => (selected === undefined ? onSelect(index) : null)}
        disabled={selected !== undefined}
      >
        {element}
      </S.Answer>
    );
  };

  return (
    <S.Container>
      <S.QuestionSet>
        <S.QuestionWrapper>
          <S.Question>{questionSet.question}</S.Question>
        </S.QuestionWrapper>
        <S.AnswersContainers>{renderAnswers()}</S.AnswersContainers>
      </S.QuestionSet>
    </S.Container>
  );
}

export default QuestionSet;
