import styled from "styled-components";
import { Wrapper, Input, SButton, Label } from "../styles";
import refreshSvg from "../../resources/refresh.svg";
import addSvg from "../../resources/plus.svg";

export const GamesLobbyContainer = styled.div``;

export const GamesLobbyHeader = styled(Wrapper)``;

export const GamesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /*border: 2px solid gray;*/
  padding: 30px;
  height: 80vh;
`;

export const GameListHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

export const GameListErrorInput = styled(Label)``;

export const GameListSearchCotainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const GamesSearchInput = styled(Input)`
  flex: 1;
`;

export const GamesRefreshButton = styled(SButton)`
  background-image: url(${refreshSvg});
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  border: 0px;
`;

export const GameListFooter = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const GameListBody = styled.div`
  flex: 1;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  overflow: auto;
  padding: 3px;
`;

export const GameList = styled.div`
  padding: 0px;
`;

export const GameListItem = styled.div`
  margin-bottom: 3px;
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
  flex: 1;
`;
export const GamesCreateButton = styled(SButton)`
  background-image: url(${addSvg});
  background-size: 65%;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  border: 0px;
`;
