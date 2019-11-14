import React, { useState } from "react";
import * as client from "../utils/SocketClient";
import Lobby from "./lobby/Lobby";
import Login from "./login/Login";
import GamesLobby from "./gamesLobby/GamesLobby";
import Game from "./game/Game";
import * as S from "./styles";

function GameManager() {
  //const [player, setPlayer] = useState({ name: "userName", topics: "geo" }); //{ name: "userName", topics: "geo" }
  const [player, setPlayer] = useState();
  //const [group, setGroup] = useState("Amazing"); //"Amazing");
  const [group, setGroup] = useState();
  //const [gameSetup, setGameSetup] = useState({ player: player, group: group });
  const [gameSetup, setGameSetup] = useState();

  const handleLogin = player => {
    setPlayer(player);
  };

  const handleGroupJoin = group => {
    console.log("joined group", group);
    setGroup(group);
  };

  const handleGroupExit = () => {
    setGroup(undefined);
    setGameSetup(undefined);
  };

  const handleGameStart = () => {
    console.log("GameManager - handleGameStart");

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
