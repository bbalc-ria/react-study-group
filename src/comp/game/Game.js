import React, { useState, useEffect } from "react";
import QuestionSet from "./questionSets/QuestionSets";
import GameScores from "./scores/Scores";
import GameTitle from "./gameMessage/GameTitle";
import * as store from "./GameStore";
import * as S from "./GameStyles";

function Game({ setup, onExit }) {
  const [state, setState] = useState(true);

  useEffect(() => {
    subscribe();
    return unsubscribe;
  }, []);

  const subscribe = () => {
    store.registerGameOverCallback(() => {
      setState(!state);
    });
    store.subscribe();
  };

  const unsubscribe = () => {
    store.unregisterGameOverCallback();
    store.unsubscribe();
  };

  const renderBody = () => {
    let gameOver = store.getGameOver();
    if (gameOver === true) {
      return (
        <S.Body className="game-body">
          <S.ScoreContainer
            gameOver={gameOver}
            className="game-score-container"
          >
            <GameScores />
          </S.ScoreContainer>
        </S.Body>
      );
    } else {
      return (
        <S.Body className="game-body">
          <S.ScoreContainer className="game-score-container">
            <GameScores />
          </S.ScoreContainer>
          <S.GameContainer className="game-game-container">
            <QuestionSet />
          </S.GameContainer>
        </S.Body>
      );
    }
  };

  return (
    <S.Container>
      <S.Header>
        <GameTitle onExit={onExit} />
      </S.Header>
      {renderBody()}
    </S.Container>
  );
}

export default Game;
