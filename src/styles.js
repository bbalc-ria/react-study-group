import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  background-color: #ebebeb;
  padding: 0 10%;
`;

export const BookImage = styled.img`
  height: 230px;
  width: 150px;
  margin: 10px;
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.width ? props.width : "auto")};
`;

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BookTitle = styled.h2`
  margin: 4px 0px 4px 0px;
  padding: 0px 0px 2px 0px;
  font-family: "Merriweather", "Georgia", serif;
  font-weight: bold;
  font-size: 24px;
`;

export const BookTitleLink = styled.h3`
  margin: 4px 4px 4px 0px;
  padding: 0px 0px 2px 0px;
  font-family: "Merriweather", "Georgia", serif;
  font-weight: 700;
  font-size: 16px;
  color: #515151;
`;

export const BookAuthor = styled.span`
  font-size: 16px;
  font-family: "Merriweather", "Georgia", serif;
`;

export const TextLink = styled.p`
  color: ${props => (props.disabled ? "grey" : "blue")};
  cursor: ${props => (props.disabled ? "initial" : "pointer")};
  font-size: 14px;
  font-family: "Merriweather", "Georgia", serif;
  margin-right: 5px;
  text-decoration: none;
`;

export const Title = styled.div`
  margin-left: 10px;
  margin-top: 40px;
  font-size: 14px;
  font-weight: 700;
  color: #515151;
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SmallBookImage = styled(BookImage)`
  height: 45px;
  width: 45px;
  margin: 5px;
`;

export const SmallBookTitle = styled(BookTitle)`
  font-size: 12px;
`;

export const SmallBookAuthor = styled(BookAuthor)`
  font-size: 12px;
`;

export const MidleBookImage = styled(BookImage)`
  height: 120px;
  width: 80px;
  margin: 5px;
`;

export const StyledLink = styled(Link)`
  color: black;
`;

export const Input = styled.input`
  border-radius: 3px;
  border: #dcd6cc 1px solid;
  color: #333333;
  height: 26px;
  width: 97%;
  padding-left: 8px;
`;
