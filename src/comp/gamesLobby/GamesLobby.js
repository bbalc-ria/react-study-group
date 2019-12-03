import React, { useState, useEffect } from "react";
import * as client from "../../utils/SocketClient";
import * as S from "./GamesLobbyStyles";
import { Title } from "../styles";

function GamesLobby({ onJoin }) {
  const [groups, setGroups] = useState([
    // "Group 1",
    // "Funny Group",
    // "Join me now!"
  ]);
  const [newGroupName, setNewGroupName] = useState("");
  const [searchGroupName, setSearchGroupName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    refreshGroups();
  }, []);

  const enterIntoGroup = groupName => {
    client.getInvoke(client.functionNames.enterGameGroup, groupName, res => {
      if (res === true) onJoin(groupName);
      else {
        setMessage("Couldn't enter into group.");
        refreshGroups();
      }
    });
  };

  const refreshGroups = () => {
    client.getInvoke(
      client.functionNames.getGroups,
      undefined,
      groups => setGroups(groups),
      () => {}
    );
  };

  const getGroups = () => {
    if (groups === undefined) return;
 
    var filtered = groups.filter(g =>
      g.toLowerCase().includes(searchGroupName.toLowerCase())
    );
    console.log("Filtered groups", filtered);
    var listItems = filtered.map((g, i) => (
      <S.GameListItem key={i} onClick={() => enterIntoGroup(g)}>
        {g}
      </S.GameListItem>
    ));

    return listItems;
  };

  const createNewGroup = () => {
    if (newGroupName) {
      client.getInvoke(
        client.functionNames.createGameGroup,
        newGroupName,
        res => {
          console.log("group created", newGroupName);
          if (res === true) onJoin(newGroupName);
          else {
            setMessage("Couldn't create group.");
            refreshGroups();
          }
        }
      );
    }
  };

  return (
    <S.GamesLobbyContainer>
      <S.GamesLobbyHeader>
        <Title>Active Games</Title>
      </S.GamesLobbyHeader>
      <S.GamesListContainer>
        <S.GameListHeader>
          <S.GameListErrorInput>{message}</S.GameListErrorInput>
          <S.GameListSearchCotainer>
            <S.GamesSearchInput
              placeholder={"Search for group"}
              onChange={e => setSearchGroupName(e.target.value)}
            ></S.GamesSearchInput>
            <S.GamesRefreshButton onClick={refreshGroups} />
          </S.GameListSearchCotainer>
        </S.GameListHeader>
        <S.GameListBody>
          <S.GameList>{getGroups()}</S.GameList>
        </S.GameListBody>
        <S.GameListFooter>
          <S.GamesCreateInput
            placeholder={"New group name?"}
            onChange={e => setNewGroupName(e.target.value)}
          ></S.GamesCreateInput>
          <S.GamesCreateButton onClick={createNewGroup} />
        </S.GameListFooter>
      </S.GamesListContainer>
    </S.GamesLobbyContainer>
  );
}

export default GamesLobby;
