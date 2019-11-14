import styled from "styled-components";
import { Wrapper, Title, Input, Label, SButton } from "../styles";

export const Container = styled.div``;

export const Body = styled.div`
  display: grid;
  grid-template-areas: "score game game game game";
`;

export const GameContainer = styled.div`
  grid-area: game;
`;

export const ScoreContainer = styled.div`
  grid-area: score;
  border-right: 1px solid #ccc;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;

export const GameTitleWrapper = styled(Wrapper)``;

export const GameTitle = styled(Title)``;

export const CounterWrapper = styled.div``;

export const Counter = styled.h2`
  padding: 0;
  margin: 5px;
`;

export const MessageWrapper = styled.div``;

export const Message = styled.h3`
  padding: 0;
  margin: 5px;
`;
