import styled from "styled-components";
import { Wrapper, Input, Label, SButton } from "../styles";

export const LoginContent = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
  padding: 30px;
  align-content: center;
  /*background: red;*/
`;

export const LoginForm = styled.form`
  /*max-width: 600px;*/
  margin: auto;
  grid-row-start: 3;
  display: block;
  grid-template-columns: 100%;
  grid-gap: 10px;
`;

export const LoginErrorInput = styled(Label)`
  min-height: 30px;
  display: block;
  margin: 5px;
  width: 100%;
  border: 0;
`;

export const LoginInput = styled(Input)`
  display: block;
  margin: 5px;
  width: 100%;
`;

export const LoginWrapper = styled(Wrapper)`
  height: 4em;
  grid-row-start: 1;
`;

export const LoginSubmit = styled(SButton)`
  display: block;
  width: 100%;
  cursor: pointer;
  text-align: center;
  margin: 5px;
`;
