import styled from "styled-components";
import { Wrapper, Input, SButton } from "../styles";
import refreshSvg from "../../resources/refresh.svg";

export const GamesLobbyContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

export const GamesLobbyHeader = styled(Wrapper)`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
`;

export const GamesListContainer = styled.div`
  position: absolute;
  top: 4.7em;
  bottom: 0px
  left: 0px;
  right: 0px;
  /*border: 2px solid gray;*/
  padding: 30px;
`;

export const GameListHeader = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  display: grid;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const GamesSearchInput = styled(Input)`
  grid-row: 1;
  grid-column-start: 0;
  grid-column-end: 2;
`;

export const GamesRefreshButton = styled(SButton)`
  grid-row: 1;
  grid-column-start: 2;
  grid-column-end: 3;
  background-image: url(${refreshSvg});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const GameListFooter = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: grid;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const GameListBody = styled.div`
  position: absolute;
  top: 4em;
  bottom: 4em;
  left: 2em;
  right: 2em;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  overflow: auto;
`;

export const GameList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

export const GameListItem = styled.li`
  margin: 5px;
  padding: 0.375rem 0.75rem;
  font-size: 1.2em;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
`;

export const GameListItemJoinButton = styled(SButton)``;

export const GamesCreateInput = styled(Input)`
  grid-row: 0;
  grid-column-start: 0;
  grid-column-end: 2;
`;
export const GamesCreateButton = styled(SButton)`
  grid-row: 0;
  grid-column-start: 2;
  grid-column-end: 3;
`;
