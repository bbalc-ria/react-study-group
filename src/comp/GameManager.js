import React, { useState, useEffect } from "react";
import * as client from "../utils/SocketClient";
import Lobby from "./lobby/Lobby";
import Login from "./login/Login";
import GamesLobby from "./gamesLobby/GamesLobby";
import Game from "./game/Game";
import * as S from "./styles";
import * as gameStore from "./game/GameStore";

function GameManager() {
  //const [player, setPlayer] = useState({ name: "userName", topics: "geo" }); //{ name: "userName", topics: "geo" }
  const [player, setPlayer] = useState();
  //const [group, setGroup] = useState("Amazing"); //"Amazing");
  const [group, setGroup] = useState();
  //const [gameSetup, setGameSetup] = useState({ player: player, group: group });
  const [gameSetup, setGameSetup] = useState();

  useEffect(() => {
    handleSubscribe();
    return handleUnsubscribe;
  });

  const handleUnsubscribe = () => {
    console.log("GameManager - unsubscribing connection close");
    client.setOnCloseFunction(undefined);
  };

  const handleSubscribe = () => {
    console.log("GameManager - subscribing connection close");
    client.setOnCloseFunction(handleClose);
  };

  const handleClose = err => {
    console.log("handling connection close");
    setGameSetup(undefined);
    setPlayer(undefined);
    setGroup(undefined);
  };

  const handleLogin = player => {
    setPlayer(player);
  };

  const handleGroupJoin = group => {
    console.log("joined group", group);
    setGroup(group);
  };

  const handleGroupExit = () => {
    console.log("GameManager - handleGroupExit");

    client.invoke(
      client.functionNames.disconnectFromGroup,
      gameSetup ? gameSetup.group : group,
      () => {}
    );
    setGroup(undefined);
    setGameSetup(undefined);
  };

  const handleGameStart = () => {
    console.log("GameManager - handleGameStart");
    gameStore.resetState()
    setGameSetup({ player: player, group: group });
    setGroup(undefined);
  };

  const getComponent = () => {
    client.verifyConnection();
    if (gameSetup) return <Game setup={gameSetup} onExit={handleGroupExit} />;

    if (!player) return <Login onLogin={handleLogin} />;
    if (group) {
      console.log("returning group lobby");
      return (
        <Lobby
          player={player}
          group={group}
          onExit={handleGroupExit}
          onStart={handleGameStart}
        />
      );
    } else return <GamesLobby onJoin={handleGroupJoin} />;
  };

  return <S.GameManagerContainer>{getComponent()}</S.GameManagerContainer>;
}

export default GameManager;
