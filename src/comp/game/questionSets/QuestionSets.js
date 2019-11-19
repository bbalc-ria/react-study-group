import React, { useState, useEffect } from "react";
import * as S from "./QuestionSetsStyle";
import * as store from "../GameStore";
import AnswerCollection from "./AnswerCollection";

function QuestionSet() {
  const [state, setState] = useState({
    questions: undefined,
    selected: undefined,
    correct: undefined
  });

  const handleRefresh = () => {
    let newRound = store.getRound();
    console.log("QuestionSet - handleRefresh - round:", newRound);
    setState({
      questions: newRound.questions,
      selected: newRound.selected,
      correct: newRound.correct
    });
  };

  const subscribe = () => {
    store.registerRefreshCallback(handleRefresh);
  };

  const unsubscribe = () => {
    store.removeRefreshCallback();
  };

  useEffect(() => {
    subscribe();
    return unsubscribe;
  });

  const handleAnswerSelect = index => {
    store.selectAnswer(index);
  };

  console.log("QuestionSet - Rendering QuestionSet, state:", state);

  return (
    <S.Container>
      <S.QuestionSet>
        <S.QuestionWrapper>
          <S.Question>{state.questions && state.questions.question}</S.Question>
        </S.QuestionWrapper>
        <AnswerCollection
          onSelect={handleAnswerSelect}
          answers={state.questions && state.questions.answers}
          selected={state.selected}
          correct={state.correct}
        ></AnswerCollection>
      </S.QuestionSet>
    </S.Container>
  );
}

export default QuestionSet;
