import React from "react";
import * as S from "./ScoresStyles";

function GameScores({ scores }) {
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

  return (
    <S.Container>
      <S.ScoreSet>{getScores()}</S.ScoreSet>
    </S.Container>
  );
}

export default GameScores;
