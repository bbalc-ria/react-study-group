import React, { useState, useEffect } from "react";
import * as store from "../GameStore";
import * as S from "./GameTitleStyles";

function GameTitle({ onExit }) {
  const [round, setRound] = useState();

  const handleMessageRefresh = () => {
    let newround = store.getRoundNb();
    if (round !== newround) {
      console.log("GameMessage round number.", newround);
      setRound(newround);
    }
  };

  useEffect(() => {
    handleMessageRefresh();
    store.registerRoundRefreshCallback(handleMessageRefresh);
    return store.unregisterRoundRefreshCallback;
  });

  const handleBackClick = () => {
    onExit && onExit();
  };

  console.log("GameMessage - Rerendering message.");

  const renderTitle = () => {
    if (round !== 0) return `Round ${round}`;
    if (store.getGameOver() === true) return `Game Over!`;
    return `Game starting!`;
  };

  return (
    <S.Container>
      <S.GameTitleWrapper>
        <S.BackBtn onClick={handleBackClick}></S.BackBtn>
        <S.GameTitle>{renderTitle()}</S.GameTitle>
      </S.GameTitleWrapper>
    </S.Container>
  );
}

export default GameTitle;
