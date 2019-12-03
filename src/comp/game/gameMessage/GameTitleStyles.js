import styled from "styled-components";
import { Wrapper, Title, Input, Label, SButton } from "../../styles";
import returnSvg from "../../../resources/return.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;

export const GameTitleWrapper = styled(Wrapper)`
  display: flex;
  align-content: center;
  text-align: center;
`;

export const GameTitle = styled(Title)`
  margin-left: auto;
  margin-right: auto;
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
