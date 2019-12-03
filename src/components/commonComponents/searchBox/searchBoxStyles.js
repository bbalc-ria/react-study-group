import styled from "styled-components";

export const ResultListItem = styled.div`
  background-color: white;
  border: grey 1px solid;
`;

export const Form = styled.form`
  width: 100%;
`;

export const SearchBox = styled.div`
  display: inline-block;
  position: relative;
`;

export const SearchDropDown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  top: 100%;
`;
