import styled from "styled-components";
import { Wrapper, Input, Label, SButton } from "../../styles";

export const PlayersContainer = styled.div`
  background: #ced4da;
  margin-top: 5px;
`;

export const Player = styled.span``;

export const PlayerWrapper = styled.div`
  padding: 0.375rem 0.75rem;
  font-size: 1.2em;
  line-height: 1.5;
  color: #000;
  background-color: ${props => (props.ready ? "#a6f1a6" : "#fff")};
  background-clip: padding-box;
  border: 1px solid #ced4da;
  outline: none;
  display: block;
`;
