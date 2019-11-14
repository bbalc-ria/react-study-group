import React, { useState } from "react";
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

  const enterIntoGroup = groupName => {
    client.invoke(client.functionNames.enterGameGroup, groupName, () => {
      onJoin(groupName);
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

    var filtered = groups.filter(g => g.includes(searchGroupName));
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
      client.invoke(client.functionNames.enterGameGroup, newGroupName, () => {
        console.log("group created", newGroupName);
        onJoin(newGroupName);
      });
    }
  };

  return (
    <S.GamesLobbyContainer>
      <S.GamesLobbyHeader>
        <Title>Active Games</Title>
      </S.GamesLobbyHeader>
      <S.GamesListContainer>
        <S.GameListHeader>
          <S.GamesSearchInput
            placeholder={"Search for group"}
            onChange={e => setSearchGroupName(e.target.value)}
          ></S.GamesSearchInput>
          <S.GamesRefreshButton onClick={refreshGroups}>
            Refresh
          </S.GamesRefreshButton>
        </S.GameListHeader>
        <S.GameListBody>
          <S.GameList>{getGroups()}</S.GameList>
        </S.GameListBody>
        <S.GameListFooter>
          <S.GamesCreateInput
            placeholder={"New group name?"}
            onChange={e => setNewGroupName(e.target.value)}
          ></S.GamesCreateInput>
          <S.GamesCreateButton onClick={createNewGroup}>
            Create
          </S.GamesCreateButton>
        </S.GameListFooter>
      </S.GamesListContainer>
    </S.GamesLobbyContainer>
  );
}

export default GamesLobby;
