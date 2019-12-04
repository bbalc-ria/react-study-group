import styled from "styled-components";
import * as S from "../../../styles";

export const ResultListItem = styled.div`
  background-color: white;
  border: grey 1px solid;
  cursor: pointer;

  :hover{
    background-color: #DDDDDD;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const SearchBox = styled.div`
  display: inline-block;
  position: relative;
`;

export const SearchDropDown = styled(S.ColumnFlex)`
  position: absolute;
  z-index: 1000;
  top: 100%;
  width: 100%;
`;
