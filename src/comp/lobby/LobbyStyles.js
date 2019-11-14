import styled from "styled-components";
import { Wrapper, Input, Title, Label, SButton } from "../styles";
import returnSvg from "../../resources/return.svg";

export const GroupLobbyContainer = styled.div``;

export const GroupLobbyHeader = styled(Wrapper)`
  display: flex;
`;

export const LobbyTitle = styled(Title)`
  margin-left: auto;
  margin-right: auto;
`;

export const GroupLobbyBody = styled.div`
  display: grid;
  grid-template-areas:
    "players chat chat chat"
    "players chat chat chat"
    "players chat chat chat"
    "players chat chat chat"
    "players chat chat chat"
    "start chat chat chat";
`;

export const PlayersContainer = styled.div`
  grid-area: players;
  background: #ced4da;
`;

export const StartContainer = styled.div`
  grid-area: start;
  background: #ced4da;
  display: flex;
  content-align: center;
`;

export const ChatContainer = styled.div`
  grid-area: chat;
  background: #fff;
`;

export const GroupLobbyFooter = styled.div``;

export const StartBtn = styled.div`
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 6px;
  border: 1px solid #fff;
  border-radius: 0.25rem;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #a6f1a6;
  cursor: pointer;
`;

export const BackBtn = styled.div`
  background-image: url(${returnSvg});
  background-size: 80%;
  background-position: center;
  background-color: #fff;
  border: 0;
  cursor: pointer;
  width: 40px;
  height: 38px;
  background-repeat: no-repeat;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;
