import React, { useState, useEffect } from "react";
import * as client from "../../utils/SocketClient";
import QuestionSet from "./questionSets/QuestionSets";
import GameScores from "./scores/Scores";
import GameMessage from "./gameMessage/GameMessage";
import * as store from "./GameStore";
import * as S from "./GameStyles";

function Game({ setup, onExit }) {
  // const [questionSet, setQuestionSet] = useState({
  //   question: "What is the name of the planet?",
  //   answers: ["Pluto", "Earth", "Mars", "Venus", "Moon"]
  // });

  const [round, setRound] = useState({
    questions: undefined,
    correct: undefined,
    scores: undefined,
    selected: undefined
  });

  let onCounterRefresh;
  let onCorrectAnswerRefresh;
  let onSelectionReset;

  useEffect(() => {
    //console.log("Game - useEffetct");
    subscribe();
    return unsubscribe;
  }, []);

  const subscribe = () => {
    //console.log("Game - subscribing to events");
    store.subscribe();
    //store.registerRefreshCallback(handleRefresh);
  };

  const unsubscribe = () => {
    //console.log("Game - unsubscribing from events");
    store.unsubscribe();
  };

  const handleRefresh = () => {
    var newRound = store.getRound();
    //console.log("Game - handleRefresh, newRound:", newRound);

    setRound({
      questions: newRound.questions,
      correct: newRound.correct,
      scores: newRound.scores,
      selected: newRound.selected
    });
  };

  const handleAswerSubmit = answerNb => {
    //console.log("Player select answer", answerNb);
    store.selectAnswer(answerNb);
  };

  const handleCounterSubscribe = callback => {
    onCounterRefresh = callback;
  };

  const handleCorrectSubscribe = callback => {
    onCorrectAnswerRefresh = callback;
  };

  const handleResetSubscribe = callback => {
    onSelectionReset = callback;
  };

  //console.log("GAME - Rerendering game");

  return (
    <S.Container>
      <S.Header>
        <GameMessage />
      </S.Header>
      <S.Body>
        <S.ScoreContainer>
          <GameScores />
        </S.ScoreContainer>
        <S.GameContainer>
          <QuestionSet />
        </S.GameContainer>
      </S.Body>
    </S.Container>
  );
}

export default Game;
