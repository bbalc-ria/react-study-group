import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const ScoreSet = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;

export const ScoreWrapper = styled.div``;

export const Score = styled.h3`
  margin: 5px;
  font-size: 1.2em;
  line-height: 1.5;
  color: #000;
  background-color: #f1f0f0;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  display: inline-block;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  width: 300px;
  overflow-wrap: break-word;
`;

export const MessageWrapper = styled.div``;

export const Message = styled.h3`
  padding: 0;
  margin: 5px;
  overflow-wrap: break-word;
  text-align: center;
`;