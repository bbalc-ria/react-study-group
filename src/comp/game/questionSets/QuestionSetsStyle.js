import styled from "styled-components";
import { Wrapper, Input, Label, SButton } from "../../styles";

export const Container = styled.div`
  border-top: 1px solid #ced4da;
  height: 80vh;
`;

export const QuestionSet = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;

export const QuestionWrapper = styled.div``;

export const Question = styled.h2`
  overflow-wrap: break-word;
`;



export const AnswersContainers = styled.div``;

export const AnswerWrapper = styled.div``;

export const Answer = styled.h3`
  overflow-wrap: break-word;
  margin: 5px;
  font-size: 1.2em;
  line-height: 1.5;
  color: #000;
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  background-color: ${props => {
    if (props.correct) return "#a6f1a6";
    if (props.incorrect) return "red";
    if (props.selected) return "#ccc";
    return "#f1f0f0";
  }}  
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  display: inline-block;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  width: 400px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

export const CorrectAnswer = styled(Answer)`
  background-color: #a6f1a6;
  cursor: not-allowed;
`;

export const IncorrectAnswer = styled(Answer)`
  background-color: red;
  cursor: not-allowed;
`;

export const SelectedAnswer = styled(Answer)`
  background-color: #ccc;
  cursor: not-allowed;
`;

export const CounterWrapper = styled.div`
  margin: 2px;
`;

export const Counter = styled.h2`
  padding: 0;
  align-content: center;
  text-align: center;
`;

export const MessageWrapper = styled.div``;

export const Message = styled.h3`
  padding: 0;
  margin: 5px;
  overflow-wrap: break-word;
  text-align: center;

`;