import React, { useState, useEffect } from "react";
import * as client from "../../utils/SocketClient";
import * as S from "./LobbyStyles";
import LobbyChatArea from "./chatArea/ChatArea";
import LobbyPlayers from "./playerArea/PlayerArea";
import * as store from "./LobbyStore";

function Lobby({ group, player, onExit, onStart }) {
  const [players, setPlayers] = useState(store.getPlayers());
  const [messages, setMessages] = useState(store.getMessages());

  const handlePlayerUpdated = () => {
    console.log("Lobby - updating player");
    refreshPlayers();
  };

  const handleMessageReceived = message => {
    console.log("new message received", message);
    handleAddMessage(message);
  };

  const handlePlayersReceived = playersInGroup => {
    console.log("received players in group", playersInGroup);
    store.clearPlayers();
    //store.addPlayer({ name: player.name, ready: false });
    store.addPlayers(
      playersInGroup.map(p => {
        return { name: p.name, ready: p.ready };
      })
    );
    setPlayers(store.getPlayers());
  };

  const refreshPlayers = () => {
    client.getInvoke(
      client.functionNames.getPlayersInGroup,
      undefined,
      handlePlayersReceived
    );
  };

  useEffect(() => {
    console.log("GroupLobby - useEffetct");
    handleSubscribe();
    refreshPlayers();

    return handleUnSubScribe;
  }, []);

  const handleSubscribe = () => {
    console.log("GroupLobby - subscribing to events");

    client.subscribeTo(client.eventNames.lobbyEvents, handleLobbyEvents);
    client.subscribeTo(client.eventNames.playersUpdated, handlePlayerUpdated);
    client.subscribeTo(
      client.eventNames.messageReceived,
      handleMessageReceived
    );
  };

  const handleUnSubScribe = () => {
    console.log("GroupLobby - unsubscribing from events");
    client.unSubscribeFrom(client.eventNames.lobbyEvents, handleLobbyEvents);
    client.unSubscribeFrom(
      client.eventNames.playersUpdated,
      handlePlayerUpdated
    );
    client.unSubscribeFrom(
      client.eventNames.messageReceived,
      handleMessageReceived
    );
  };

  const handlePlayerReady = name => {
    store.playerReady(name);
    setPlayers(store.getPlayers());
  };

  const handleAddMessage = msg => {
    store.addMessage(msg);
    setMessages(store.getMessages());
  };

  const handleLobbyEvents = (name, args) => {
    console.log("handleLobbyEvents", name, args);
    if (name === "playerready") handlePlayerReady(args);
    else if (name === "playerreadynot") handlePlayerReady(args);
    else if (name === "gamestarting")
      handleAddMessage(`Game starting in ${args}.`);
    else if (name === "gamestartingcancelled")
      handleAddMessage("Game start cancelled.");
    else if (name === "gamestarted") {
      store.clear();
      setMessages([]);
      setPlayers([]);
      onStart();
    }
  };

  const handleBack = () => {
    onExit();
  };

  const handlePlayerMarkReady = () => {
    client.invoke(client.functionNames.startGame, undefined);
  };

  const handleSendMessage = message => {
    if (message)
      client.invoke(client.functionNames.sendMessageToGroup, message);
  };

  //console.log("GroupLobby - State", state);

  return (
    <S.GroupLobbyContainer>
      <S.GroupLobbyHeader>
        <S.BackBtn onClick={handleBack} />
        <S.LobbyTitle>Welcome to '{group}'</S.LobbyTitle>
      </S.GroupLobbyHeader>
      <S.GroupLobbyBody>
        <S.PlayersContainer>
          <LobbyPlayers players={players}></LobbyPlayers>
        </S.PlayersContainer>
        <S.StartContainer>
          <S.StartBtn onClick={handlePlayerMarkReady}>Ready</S.StartBtn>
        </S.StartContainer>
        <S.ChatContainer>
          <LobbyChatArea
            messages={messages}
            onSend={handleSendMessage}
          ></LobbyChatArea>
        </S.ChatContainer>
      </S.GroupLobbyBody>
      <S.GroupLobbyFooter></S.GroupLobbyFooter>
    </S.GroupLobbyContainer>
  );
}

export default Lobby;
