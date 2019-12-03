import React, { useState, useEffect } from "react";
import * as S from "./ScoresStyles";
import * as store from "../GameStore";

function GameScores() {
  const [scores, setScores] = useState();
  const [gameOver, setGameOver] = useState(false);

  const handleRefresh = () => {
    let newRound = store.getRound();
    console.log("GameScores - handleRefresh - round:", newRound);
    setScores(newRound.scores);
    setGameOver(newRound.gameOver);
  };

  const subscribe = () => {
    store.registerScoreRefreshCallback(handleRefresh);
  };

  const unsubscribe = () => {
    store.removeScoreRefreshCallback(handleRefresh);
  };

  useEffect(() => {
    //console.log("GameScores - useEffect.");
    subscribe();
    return unsubscribe;
  });

  const getScores = () => {
    if (scores !== undefined) {
      return scores.map((element, index) => {
        return (
          <S.ScoreWrapper key={index}>
            <S.Score>
              {element.player} : {element.score}
            </S.Score>
          </S.ScoreWrapper>
        );
      });
    }
  };

  console.log("Score - gameover", gameOver);

  return (
    <S.Container className="score-container">
      <S.MessageWrapper>
        <S.Message>Scores</S.Message>
      </S.MessageWrapper>
      <S.ScoreSet className="score-set">{getScores()}</S.ScoreSet>
    </S.Container>
  );
}

export default GameScores;
