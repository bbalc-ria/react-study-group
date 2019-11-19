import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
`;

export const Wrapper = styled.section`
  padding: 0.1em;
  background: #2779a7;
`;

export const Header = styled.div`
  background: #ffffff;
`;

export const Content = styled.div`
  background: #ffffff;
`;

export const SButton = styled.button`
  background: ${props => (props.primary ? "#2779A7" : "white")};
  color: ${props => (props.primary ? "white" : "#2779A7")};
  opacity: ${props => (props.visible === false ? 0 : 1)};
  font-size: 1.2em;
  margin: 0.2em;
  padding: 0.25em 0.2em;
  border: 1px solid #2779a7;
  border-radius: 3px;
  min-width: 3em;
  outline: none;
  cursor: pointer;
`;

export const Label = styled.label`
  /*width: 100%;*/
  padding: 0.375rem 0.75rem;
  font-size: 1.2em;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
`;

export const Input = styled.input`
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

export const GameManagerContainer = styled.div``;
