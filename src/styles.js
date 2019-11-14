import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  background-color: #EBEBEB;
`;

export const BookDetailContainer = styled.div`
  width: 40%;
`;

export const BookImage = styled.img`
  src: ${props => props.src};
  height: 230px;
  width: 150px;
  margin: 10px;
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BookTitle = styled.h1`
  margin: 4px 0px 4px 0px;
  padding: 0px 0px 2px 0px;
  font-family: "Merriweather", "Georgia", serif;
  font-weight: bold;
  font-size: 24px;
`;

export const BookAuthor = styled.span`
  font-size: 16px;
  font-family: "Merriweather", "Georgia", serif;
`;

export const BookDescription = styled.span`
  font-size: 14px;
  font-family: "Merriweather", "Georgia", serif;
  margin-top: 10px;
`;
