import styled from "styled-components";
import { Wrapper, Input, Label, SButton } from "../styles";

export const LoginContent = styled.div`
  margin: auto;
  padding: 30px;
  /*background: red;*/
`;

export const LoginForm = styled.form`
  /*max-width: 600px;*/
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LoginErrorInput = styled(Label)`
  min-height: 30px;
  display: block;
  margin: 5px;
  border: 0;
  box-sizing: border-box;
`;

export const LoginInput = styled(Input)`
  box-sizing: border-box;
  display: block;
  margin: 5px;
  width: 400px;
  margin: auto;
`;

export const LoginWrapper = styled(Wrapper)`
  height: 4em;
`;

export const LoginSubmit = styled(SButton)`
  display: block;
  width: 400px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  margin: 5px;
`;
