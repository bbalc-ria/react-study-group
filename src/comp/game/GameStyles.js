import styled from "styled-components";
import { Wrapper, Title } from "../styles";

export const Container = styled.div``;

export const Body = styled.div`
  height: 90vh;
  display: flex;
`;

export const GameContainer = styled.div`
  width: 100%;
  flex: 1;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-content: center;
  text-align: center;
  width: ${props => (props.gameOver ? "" : "350px")};
  flex: ${props => (props.gameOver ? "1" : "")};
  border-right: ${props => (props.gameOver ? "0px" : " 1px solid #ccc")};
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
