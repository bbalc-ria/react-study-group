import React, { useState, useEffect } from "react";
import * as store from "../GameStore";
import * as S from "./GameMessageStyles";

function GameMessage() {
  const [messageSet, setMessageSet] = useState({});

  const handleMessageRefresh = () => {
    //console.log("GameMessage - counter resfrehs");
    let messageSet = store.getMessageSet();
    setMessageSet(messageSet);
  };

  useEffect(() => {
    //console.log("GameMessage - useEffect");
    store.registerMessageRefreshCallback(handleMessageRefresh);
  }, []);

  //console.log("GameMessage - Rerendering GameMessage");

  return (
    <S.Container>
      <S.GameTitleWrapper>
        <S.GameTitle>Round {messageSet.round}</S.GameTitle>
      </S.GameTitleWrapper>
      <S.MessageWrapper>
        <S.Message>{messageSet.gameMessage}</S.Message>
      </S.MessageWrapper>
      <S.CounterWrapper>
        <S.Counter>{messageSet.counter}</S.Counter>
      </S.CounterWrapper>
    </S.Container>
  );
}

export default GameMessage;
