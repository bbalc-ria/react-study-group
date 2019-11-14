import styled from "styled-components";
import { Wrapper, Input, Label, SButton } from "../../styles";
import sendSvg from "../../../resources/send1.svg";

export const GroupLobbyChatContainer = styled.div`
  border: 1px solid #ced4da;
  background: #ced4da;
  padding: 5px;
`;

export const Header = styled.div`
  border-bottom: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

export const Chat = styled.div`
  display: flex;
  height: 400px;
  overflow: auto;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  padding: 5px;
  background: #fff;
  display: block;
`;

export const MessageWrapper = styled.div`
  margin: 2px;
  padding: 0.375rem 0.75rem;
  font-size: 1.2em;
  line-height: 1.5;
  color: #000;
  background-color: #f1f0f0;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  display: inline-block;
`;

export const MessageContainer = styled.div`
  background-color: #fff;
`;

export const Message = styled.span`
  /*display: block;*/
`;

export const GroupLobbyChatFooter = styled.div`
  /*border: 1px solid #ced4da;*/
  display: flex;
  align-content: center;
  margin-top: 2px;
`;

export const GroupLobbyChatInput = styled(Input)`
  width: 100%;  
`;

export const GroupLobbyChatSend = styled.div`
  background-image: url(${sendSvg});
  background-size: 80%;
  background-position: center;
  background-color: #f1f0f0;
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
