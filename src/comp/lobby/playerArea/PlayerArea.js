import React from "react";
import * as S from "./PlayerAreaStyles";

function PlayerArea({ players }) {
  const renderPlayers = () => {
    console.log("Players in group", players);
    return players.map((p, i) => {
      return (
        <S.PlayerWrapper key={i} ready={p.ready}>
          <S.Player>{p.name}</S.Player>
        </S.PlayerWrapper>
      );
    });
  };

  return <S.PlayersContainer>{renderPlayers()}</S.PlayersContainer>;
}

export default PlayerArea;
